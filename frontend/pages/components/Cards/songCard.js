import React from "react";
import classes from "./../../../styles/songCard.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Link from "next/link";

function SongCard({ songData }) {
  return (
    <div className={classes.card_main}>
      <img src={songData?.url} alt="cover" />
      <BsPlayCircle className={classes.playIcon} />
      <div className={classes.song_data}>
        <h3>{songData?.name}</h3>
        <Link href="/artist">
          <p className={classes.artistName}>{songData?.artistName}</p>
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
