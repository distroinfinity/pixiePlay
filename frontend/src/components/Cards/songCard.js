import React from "react";
import "./songCard.css";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
function SongCard({ songData }) {
  return (
    <div className="card_main">
      <img src={songData?.url} alt="cover" />
      <BsPlayCircle className="playIcon" />
      <div className="song_data">
        <h3>{songData?.name}</h3>
        <Link to="/artist">
          <p>{songData?.artistName}</p>
        </Link>
        <div className="price_div">
          <p>
            Price: &nbsp; <span className="price">{songData?.price} Matic</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
