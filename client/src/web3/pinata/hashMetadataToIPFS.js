import "dotenv/config";
import axios from "axios";
const {
  REACT_APP_PINATA_API_KEY,
  REACT_APP_PINATA_SECRET_API_KEY,
} = process.env;

/**
 * handles adding metadata to the selected pin
 */
export default function hashMetadataToIPFS(ipfsHash, badgeName, description, tags, quantity) {
  console.log("pin: ", ipfsHash);
  console.log("badgeName: ", badgeName);
  console.log("description: ", description);
  console.log("tags: ", tags);
  console.log("quantity: ", quantity);

  const url = "https://api.pinata.cloud/pinning/hashMetadata";

  const body = {
    ipfsPinHash: ipfsHash,
    name: badgeName,
    keyvalues: {
      badge_description: description,
      badge_tags: tags,
      badge_quantity: quantity,
    },
  };

  return axios
    .put(url, body, {
      headers: {
        pinata_api_key: REACT_APP_PINATA_API_KEY,
        pinata_secret_api_key: REACT_APP_PINATA_SECRET_API_KEY,
      },
    })
    .then((response) => {
      console.log("response after hashMetadataToIPFS(): ", response);
    })
    .catch((error) => {
      console.error(error);
    });
}
