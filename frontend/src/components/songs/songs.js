import React from "react";
import "./songs.css";
import Card from "../Cards/songCard";
function Songs() {
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
    <div className="songs_div">
      {data.map((d, index) => (
        <Card songData={d} key={index} />
      ))}
    </div>
  );
}

export default Songs;
