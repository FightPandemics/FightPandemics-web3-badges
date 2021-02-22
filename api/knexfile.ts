import { knexSnakeCaseMappers } from "objection";
import { config } from "./libs/config"

module.exports = {

  development: {
    client: "pg",
    connection: config.databaseUrl,
    migrations: {
      extension: "ts",
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds/",
    },
    ...knexSnakeCaseMappers(),
  },

  test: {
    client: "pg",
    connection: config.databaseUrl,
    migrations: {
      directory: "./migrations/",
    },
    seeds: {
      directory: "./seeds/",
    },
    ...knexSnakeCaseMappers(),
  },

  production: {
    client: "pg",
    connection: config.databaseUrl,
    migrations: {
      directory: "./migrations/",
    },
    seeds: {
      directory: "./seeds/",
    },
    ...knexSnakeCaseMappers(),
  },
};
