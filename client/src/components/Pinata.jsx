import React, { useState } from "react";
import pinFileToIPFS from "../pinata/pinFileToIPFS";
import hashMetadataToIPFS from "../pinata/hashMetadataToIPFS";

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
  }
  return (
    <form onSubmit={handleSubmit}>
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
