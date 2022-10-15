import React from "react";
import classes from "./../../../styles/songCard.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";
import { marketplaceAddress } from "./../../../../backend/config";
import NFTMarketplace from "./../../../../backend/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

function SongCard({ songData, setSongLink }) {
  function handleSongPlay() {
    setSongLink(songData.audio);
  }
  async function resell() {
    console.log("nft:", nft);
    // router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`);
    // loadNFTs();
  }

  // console.log("song data is", songData);
  return (
    <div className={classes.card_main}>
      <img src={songData.cover} alt="cover" />{" "}
      <BsPlayCircle onClick={handleSongPlay} className={classes.playIcon} />
      <div className={classes.song_data}>
        <h3>{songData?.name}</h3>

        <p className={classes.artistName}>
          Artist: &nbsp;{" "}
          <Link href={`/artist/${songData.artist}`}>
            <span className={classes.price}>
              {"0x...." + songData?.artist?.substr(songData.artist.length - 5)}
            </span>
          </Link>
        </p>

        <div className={classes.price_div}>
          <p>
            Price: &nbsp;{" "}
            <span className={classes.price}>{songData?.price} Matic</span>
          </p>
        </div>

        <button onClick={resell} className={classes.buy_btn}>
          Resell
        </button>
      </div>
    </div>
  );
}

export default SongCard;
