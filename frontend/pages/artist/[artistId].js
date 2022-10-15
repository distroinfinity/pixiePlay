import React,{useState} from "react";
import classes from  "../../styles/artist.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SongsList from "../components/songs/songList";
import FansList from "../components/fansList";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { ConnectButton } from "web3uikit";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
// import Logo from "./../assets/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Artist({setSongLink,songLink}) {
      
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
  const fanData = [
    {
      address: "123893123193asd1920213213",
      donations: 100,
    },
    {
      address: "123893123193asd1920213213",
      donations: 100,
    },
    {
      address: "123893123193asd1920213213",
      donations: 100,
    },
    {
      address: "123893123193asd1920213213",
      donations: 100,
    },
    {
      address: "123893123193asd1920213213",
      donations: 100,
    },
  ];
  return (
    <div>
      <div className="header_main">
        <div className="header_left">
          <Link href="/">
            <img src="/images/logo2.png" />
          </Link>
        </div>
        <div className="header_center">
          <div className="search_div">
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
            />
            <BiSearch />
          </div>
        </div>
        <div className="header_right">
          <ConnectButton moralisAuth={false} />
        </div>
      </div>
      <div className="home2">
        <div className="sidebar_main">
          <Link href="/">
            <div className="side_mini active">
              <AiOutlineHome />
              <p>Home</p>
            </div>
          </Link>
          <Link href="/addnewmusic">
            <div className="side_mini ">
              <RiMoneyDollarCircleLine />
              <p>Mint new music</p>
            </div>
          </Link>
          <div className="side_mini">
            <AiOutlineHome />
            <p>My music</p>
          </div>
          <div className="side_mini">
            <IoPersonOutline />
            <p>Creator Dashboard</p>
          </div>
        </div>

        <div className="home_right">
          <div className={classes.artist_main}>
            <div className={classes.img_div}>
              <img src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_760,c_fill,h_380,g_face/q_75,f_auto,w_660,c_thumb,h_380,g_west/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1499859384%2Fw22jeadhkdltecmr1fac.jpg" />
              <h1>Diljeet Dosanjh</h1>
            </div>
            <div className={classes.artist_songs}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <BsFillPlayCircleFill className={classes.play_icon} />
                <h2 style={{ marginLeft: "30px" }}>Popular</h2>
              </div>

              <div className={classes.songs_table}>
                {data.map((d, index) => (
                  <SongsList songdata={d} index={index} />
                ))}
              </div>
            </div>
            <div className={classes.artist_fans}>
              <h2>Top Fans</h2>
              <div className={classes.songs_table}>
                {fanData.map((d, index) => (
                  <FansList fanData={d} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player_div">
        {songLink && songLink !== "" && (
          <AudioPlayer
            autoPlay
            src={songLink}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        )}
      </div>
    </div>
  );
}

export default Artist;
