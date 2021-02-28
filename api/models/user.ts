import { Model, Modifiers } from "objection"

export class User extends Model {
  id!: number;
  did!: string;
  email!: string;
  issuer!: string;
  lastLoginAt!: number;

  static tableName = "user";

  static jsonSchema = {
    type: "object",
    properties: {
      id: { type: "integer" },
      did: { type: "string", minLength: 1, maxLength: 255 },
      email: { type: "string", minLength: 1, maxLength: 255 },
      issuer: { type: "string" },
      lastLoginAt: { type: "number" },
    },
  };

  static modifiers: Modifiers = {
    findByIssuer(query: any, issuer: string) {
      query.where("issuer", issuer)
    },
  };
}
