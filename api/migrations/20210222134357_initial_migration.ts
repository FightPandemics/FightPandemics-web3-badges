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
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists("users");
}
