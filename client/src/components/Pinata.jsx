import React from "react";
import pinFileToIPFS from "../pinata/uploadFileToIPFS";

export default function Pinata() {
  async function handleClick() {
    const pin = await pinFileToIPFS();
    console.log(pin);
  }
  return (
    <button onClick={handleClick}>Pin to Pinata</button>
  );
}