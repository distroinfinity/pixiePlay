import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import classes from "../../../styles/songList.module.css";
function SongsList({ songdata, index }) {
  console.log(songdata);

  return (
    <div className={classes.songlist_main}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <p>{index + 1}</p>
        <img className={classes.song_img} src={songdata.cover} />
        <h5>{songdata.name}</h5>
        <p>{songdata.price} Matic</p>
      </div>
      <BsFillPlayCircleFill className={classes.play} />
    </div>
  );
}

export default SongsList;
