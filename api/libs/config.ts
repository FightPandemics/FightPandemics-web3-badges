import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

export const config = {
  databaseUrl: process.env.DATABASE_URL || "",
};
