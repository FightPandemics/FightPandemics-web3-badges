require('dotenv').config();
const pinataApiKey = process.env.PINATA_API_KEY
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY
// console.log(pinataApiKey, pinataSecretApiKey);
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const pinFileToIPFS = async () => {

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
    console.log(res.data);
  }
}

pinFileToIPFS();
