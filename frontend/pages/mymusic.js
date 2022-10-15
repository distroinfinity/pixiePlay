import React from 'react'
import SongCard from './components/Cards/songCard2';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
// import Logo from "./../assets/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import Link from "next/link";
import classes from ".././styles/myMusic.module.css";
function Mymusic({setSongLink}) {
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
          <div className={classes.mymusic_main}>
      <h1>My NFTs</h1>
      <div className={classes.mymusic}>
        {data.map((d, index) => (
          <SongCard key={index} songData={d} setSongLink={setSongLink} />
        ))}
      </div>
    </div>
        </div>
      </div>
      </div>


    
  );
}

export default Mymusic