import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("did").notNullable();
      table.string("email").notNullable();
      table.string("issuer");
      table.integer("last_login_at");
      table.timestamps(true, true);
    })
    .createTable("badge", (table) => {
      table.increments("id").primary();
      table.integer("token_id").notNullable();
      table.integer("clone_from_id").notNullable();
      table.integer("num_clones_allowed").notNullable();
      table.integer("num_clones_available").notNullable();
      table.integer("num_clones_in_wild").notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists("user")
    .dropTableIfExists("badge");
}
