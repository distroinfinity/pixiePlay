import React from "react";
import classes from "./../../../styles/songCard.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";
import Identicon from "identicon.js";

function SongCard({ songData,setSongLink }) {

  function handleSongPlay(){
    setSongLink(songData.audio);
  }

  console.log("song data is", songData);
  return (
    <div className={classes.card_main}>
      <img
        src={`data:image/png;base64,${new Identicon(
          songData.tokenURI,
          500
        ).toString()}`}
        alt="cover"
      />{" "}
      <BsPlayCircle onClick={handleSongPlay} className={classes.playIcon} />
      <div className={classes.song_data}>
        <h3>{songData?.name}</h3>

        <p className={classes.artistName}>
          Artist: &nbsp;{" "}
          <Link href={`/artist/${songData.artist}`}>
            <span className={classes.price}>
              {"0x...." + songData.artist.substr(songData.artist.length - 5)}
            </span>
          </Link>
        </p>

        <div className={classes.price_div}>
          <p>
            Price: &nbsp;{" "}
            <span className={classes.price}>{songData?.price} Matic</span>
          </p>
        </div>
        <button className={classes.buy_btn}>Buy</button>
      </div>
    </div>
  );
}

export default SongCard;
