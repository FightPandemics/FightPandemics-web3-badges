import { Model } from "objection"

export class Badge extends Model {
  id!: number;
  tokenId!: number;
  cloneFromId!: number;
  numClonesAllowed!: number;
  numClonesAvailable: number;
  numClonesInWild!: number;

  static tableName = "badge";

  static jsonSchema = {
    type: "object",
    properties: {
      id: { type: "integer" },
      tokenId: { type: "integer" },
      cloneFromId: { type: "integer" },
      numClonesAllowed: { type: "integer" },
      numClonesAvailable: { type: "integer" },
      numClonesInWild: { type: "integer" },
    },
  };
}
