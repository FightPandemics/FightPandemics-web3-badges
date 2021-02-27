import express from "express";
import { Magic, MagicUserMetadata } from "@magic-sdk/admin";
import { config } from "../libs/config";
import passport from "passport";
import { Strategy as MagicStrategy, MagicUser, DoneFunc } from "passport-magic";
import { User } from "../models/user";

const router = express.Router();

const magic = new Magic(config.magicSecretKey);

const strategy = new MagicStrategy(async (user, done) => {
  const userMetadata = await magic.users.getMetadataByIssuer(user.issuer);
  const existingUser = await User.query().findOne({ issuer: user.issuer });
  console.log("Existing User: ", existingUser);
  if (!existingUser) {
    return signup(user, userMetadata, done);
  } else {
    return login(user, existingUser, done);
  }
});

passport.use(strategy);

/* Implement User Signup */
const signup = async (user: MagicUser, userMetadata: MagicUserMetadata, done: DoneFunc) => {
  const newUser = {
    issuer: user.issuer,
    email: userMetadata.email || "",
    lastLoginAt: user.claim.iat,
    did: user.publicAddress,
  };
  try {
    await User.query().insert(newUser);
    return done(null, newUser);
  } catch (error) {
    console.log("Something went wrong during user sign up: ", error);
  }
};

/* Implement User Login */
const login = async (user: MagicUser, existingUser: User, done: DoneFunc) => {
  /* Replay attack protection (https://go.magic.link/replay-attack) */
  if (user.claim.iat <= existingUser.lastLoginAt) {
    return done(null, false, {
      message: `Replay attack detected for user ${user.issuer}`,
    });
  }
  try {
    await User.query().update({
      issuer: user.issuer,
      lastLoginAt: user.claim.iat,
    });
    return done(null, user);
  } catch (error) {
    console.log("Something went wrong during user login: ", error);
  }
};

/* Attach middleware to login endpoint */
router.post("/login", passport.authenticate("magic"), (req, res) => {
  if (req.user) {
    res
      .status(200)
      .send({ done: true, user: req.user })
      .end();
  } else {
    return res
      .status(401)
      .send({ error: "Could not log user in" })
      .end();
  }
});

/* Defines what data are stored in the user session */
passport.serializeUser((user: MagicUser, done: DoneFunc) => {
  done(null, user.issuer);
});

/* Populates user data in the req.user object */
passport.deserializeUser(async (id: number, done: DoneFunc) => {
  try {
    const user = await User.query().findOne({ issuer: id });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

/* Implement Get Data Endpoint */
router.get("/", async (req, res) => {
  if (req.isAuthenticated()) {
    return res
      .status(200)
      .json({ user: req.user })
      .end();
  } else {
    return res
      .status(401)
      .send({ error: "User not logged in" })
      .end();
  }
});

/* Implement Logout Endpoint */
router.post("/logout", async (req, res) => {
  if (req.isAuthenticated()) {
    // @ts-ignore
    await magic.users.logoutByIssuer(req.user.issuer);
    req.logout();
    res.clearCookie("badges-auth", { path: "/" });
    return res.status(200).end();
  } else {
    return res
      .status(401)
      .send({ error: "User not logged in" })
      .end();
  }
});

export default router;
