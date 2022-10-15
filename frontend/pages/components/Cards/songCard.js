import React from "react";
import classes from "./../../../styles/songCard.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";
import Identicon from "identicon.js";

function SongCard({ songData }) {
  {
    console.log("here", songData);
  }
  return (
    <div className={classes.card_main}>
      {/* `data:image/png;base64,${new Identicon(
          songData.tokenURI,
          500
        ).toString()}` */}
      <img src={songData.cover} alt="cover" />{" "}
      <BsPlayCircle className={classes.playIcon} />
      <div className={classes.song_data}>
        <h3>{songData?.name}</h3>
        <Link href="/artist">
          <p className={classes.artistName}>
            {"0x...." + songData.artist.substr(songData.artist.length - 5)}
          </p>
        </Link>
        <div className={classes.price_div}>
          <p>
            Price: &nbsp;{" "}
            <span className={classes.price}>{songData?.price} Matic</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
