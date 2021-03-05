import React, { useState } from "react";
import pinFileToIPFS from "../web3/pinata/pinFileToIPFS";
import hashMetadataToIPFS from "../web3/pinata/hashMetadataToIPFS";
import addIpfsUriToContract from "../web3/pinata/addIpfsUriToContract";

export default function Pinata() {
  const [badgeImage, setBadgeImage] = useState("");
  const [badgeName, setBadgeName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [quantity, setQuantity] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    const [file] = badgeImage;
    const ipfsHash = await pinFileToIPFS(file);
    console.log(ipfsHash);

    await hashMetadataToIPFS(ipfsHash, badgeName, description, tags, quantity);
    await addIpfsUriToContract(ipfsHash);
  }
  return (

    <form onSubmit={handleSubmit}>
      <br/><br/><br/><br/><br/><br/><br/>
      <label >
        Title (name)
        <input type="text" name="badgeNamge"
          onChange={e => setBadgeName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Description
        <input type="text" name="description"
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Tags
        <input type="text" name="tags"
          onChange={e => setTags(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Quantity
        <input type="text" name="quantity"
          onChange={e => setQuantity(e.target.value)}
        />
      </label>
      <br/>
      <br/>
      <label>
        Upload image
        <input type="file" accept="image/*" name="badgeImage"
          onChange={e => setBadgeImage(e.target.files)}
        />
      </label>
      <input type="submit" value="Pin to IPFS"/>
    </form>
  );
}
