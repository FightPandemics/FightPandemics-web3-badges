// require('dotenv').config();
import "dotenv/config";
const {
  PINATA_API_KEY,
  PINATA_SECRET_API_KEY
} = process.env;
import axios from 'axios'
import {ethers} from 'ethers';
import fs from 'fs';
import FormData from 'form-data';

export default async function pinFileToIPFS() {

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();

  // Must change 1month-volunteer.png to token's metadata 
  const filename = __dirname + "/1month-volunteer.png";

  if(filename) {
    data.append('file', fs.createReadStream(filename));

    const res = await axios.post(url, data, {
      maxContentLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data;boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    });
    // console.log(res.data);
    return res.data
  }
  
  console.log(ethers.Contract.address);
}

// (async () => {
//   await pinFileToIPFS().then( (data) => {
//     console.log(data.IpfsHash);
//   })
// })()
// pinFileToIPFS();
