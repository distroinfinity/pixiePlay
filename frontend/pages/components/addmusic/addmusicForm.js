import React, { useState } from "react";
import classes from "../../../styles/addmusic.module.css";
import { useRouter } from "next/router";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
const axios = require("axios").default;

import { PROJECTID, PROJECTSECRET } from "../../../api_key";
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = PROJECTID;
const projectSecret = PROJECTSECRET;
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

import { marketplaceAddress } from "../../../../backend/config";
import NFTMarketplace from "./../../../../backend/artifacts/contracts/NFTMarketPlace.sol/NFTMarketplace.json";

function AddmusicForm({setLoadingState}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [royalty, setRoyalty] = useState();
  const [price, setPrice] = useState(null);
  // const [fileUrl, setFileUrl] = useState(null);
  const [mp3, setMp3] = useState(null);
  const [cover, setCover] = useState(null);

  const router = useRouter();

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "desc") {
      setDesc(value);
    }
    if (name === "price") {
      setPrice(value);
    }
    if (name === "royalty") {
      setRoyalty(value);
    }
  }
  async function onChange(e) {
    const file = e.target.files[0];
    setMp3(file);
  }
  async function selectCover(e) {
    const file = e.target.files[0];
    setCover(file);
  }

  async function uploadToIPFS(mp3Url) {
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      desc,
      image: mp3Url,
    });
    let nftUrl;
    try {
      const added = await ipfs.add(data);
      nftUrl = `https://music-mania.infura-ipfs.io/ipfs/${added.path}`;
    } catch (error) {
      console.log("Error uploading nft json: ", error);
    }
    return nftUrl;
  }

  async function listNFTForSale() {
    setLoadingState(true);
    if (!name || !desc || !price || !royalty || !cover || !mp3) return;

    let mp3Url;
    try {
      const result = await ipfs.add(mp3);
      console.log("infura result", result);
      mp3Url = `https://music-mania.infura-ipfs.io/ipfs/${result.path}`;
    } catch (error) {
      console.log("Error uploading mp3: ", error);
    }
    console.log("mp3url is ", mp3Url);

    let coverUrl;
    try {
      const result = await ipfs.add(cover);
      console.log("infura result", result);
      coverUrl = `https://music-mania.infura-ipfs.io/ipfs/${result.path}`;
    } catch (error) {
      console.log("Error uploading cover photo: ", error);
    }
    console.log("cover url is ", coverUrl);

    const nftUrl = await uploadToIPFS(mp3Url);
    console.log("nft url is ", nftUrl);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    const price_ = ethers.utils.parseUnits(price.toString(), "ether");
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken(
      nftUrl,
      price_,
      royalty,
      coverUrl,
      {
        value: listingPrice,
      }
    );
    await transaction.wait();
setLoadingState(false);
    router.push("/");
  }

  return (
    <div className={classes.addMusic}>
      <div className={classes.input_div}>
        <label>Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          className={classes.inputt}
        />
      </div>
      <div className={classes.input_div}>
        <label>Desciption</label>
        <textarea
          onChange={handleChange}
          name="desc"
          row={3}
          className={classes.inputt}
        />
      </div>
      <div className={classes.input_div}>
        <label>Asset Price</label>
        <input
          onChange={handleChange}
          name="price"
          type="text"
          className={classes.inputt}
        />
      </div>
      <div className={classes.input_div}>
        <label>Royalty (in %)</label>
        <input
          onChange={handleChange}
          name="royalty"
          type="text"
          className={classes.inputt}
        />
      </div>
      <div className={classes.input_div}>
        <label>Select audio</label>
        <input
          onChange={onChange}
          type="file"
          accept=".mp3"
          className={classes.inputt}
        />
      </div>
      <div className={classes.input_div}>
        <label>Select cover photo</label>
        <input
          onChange={selectCover}
          type="file"
          accept=".jpeg,.jpg"
          className={classes.inputt}
        />
      </div>
      <button onClick={listNFTForSale} className={classes.createBtn}>
        Create NFT
      </button>
    </div>
  );
}

export default AddmusicForm;
