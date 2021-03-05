/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
import "dotenv/config";
import axios from "axios";
import FormData from "form-data";
const {
  REACT_APP_PINATA_API_KEY,
  REACT_APP_PINATA_SECRET_API_KEY,
} = process.env;

/**
 * returns the hash of the pinned png file
 */
export default async function pinFileToIPFS(badgeImage) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  console.log(REACT_APP_PINATA_API_KEY, REACT_APP_PINATA_SECRET_API_KEY);
  console.log(badgeImage);
  const data = new FormData();
  try {
    if (badgeImage) {
      data.append("file", badgeImage);

      const res = await axios.post(url, data, {
        maxContentLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data;boundary=${data._boundary}`,
          pinata_api_key: REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: REACT_APP_PINATA_SECRET_API_KEY,
        },
      });
      console.log(res.data);
      return res.data.IpfsHash;
    }
  } catch (error) {
    console.error(error);
  }
}
