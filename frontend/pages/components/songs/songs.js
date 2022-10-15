import React from "react";
import classes from "./../../../styles/songs.module.css";
import Card from "../Cards/songCard";

function Songs(props) {
  const data = [
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artistName: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
  ];

  return (
    <div className={classes.songs_div}>
      {props.nfts.map((d, index) => (
        <Card setSongLink={props.setSongLink} songData={d} key={index} />
      ))}
    </div>
  );
}

export default Songs;
