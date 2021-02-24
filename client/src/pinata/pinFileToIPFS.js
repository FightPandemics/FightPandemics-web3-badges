import "dotenv/config";
import axios from "axios";
// import { ethers } from "ethers";
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

  // // Must change 1month-volunteer.png to token's metadata
  // if (filename) {
  //   data.append("file", fs.createReadStream(filename));

  //   const res = await axios.post(url, data, {
  //     maxContentLength: "Infinity",
  //     headers: {
  //       "Content-Type": `multipart/form-data;boundary=${data._boundary}`,
  //       pinata_api_key: PINATA_API_KEY,
  //       pinata_secret_api_key: PINATA_SECRET_API_KEY,
  //     },
  //   });
  //   // console.log(res.data);
  //   return res.data;
  // }
  // console.log(ethers.Contract.address);
}

// (async () => {
//   await pinFileToIPFS().then( (data) => {
//     console.log(data.IpfsHash);
//   })
// })()
// pinFileToIPFS();
