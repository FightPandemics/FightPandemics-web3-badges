import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import passport from "passport";
import userRouter from "./routes/user";
import cors from "cors";
import { config } from "./libs/config";
import requestId from "express-request-id";
import memoryStore from "memorystore";

import Knex from "knex";
import knexConfig from "./knexfile";
import { Model } from "objection";

// Initialize knex
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"])

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);

const app = express();
const PORT = 8000;
app.set("trust proxy", 1)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(config.apiSecretKey))
app.use(cors())
app.use(requestId())

logger.token("id", (req) => {
  // @ts-ignore
  return req.id
})
const loggerFormat =
  ':id [:date[web]] ":method :url" :status :response-time ms :remote-addr :remote-user'
app.use(
  logger(loggerFormat, {
    skip: function(_, res) {
      return res.statusCode < 400
    },
    stream: process.stderr
  })
)

app.use(
  logger(loggerFormat, {
    skip: function(_, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout,
  }),
);

const MAX_AGE = 86400000; // 24hour
const MemoryStore = memoryStore(session);
app.use(
  session({
    name: "badges-auth",
    secret: config.apiSecretKey,
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({
      checkPeriod: MAX_AGE,
    }),
    cookie: {
      maxAge: MAX_AGE,
      expires: new Date(Date.now() + MAX_AGE * 1000),
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/user", userRouter)
app.get("/health_check", (_, res) => res.status(200).end("Healthy"));
app.get("/", (_, res) => res.status(404).end("Nothing here"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
