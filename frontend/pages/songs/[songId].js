import React from 'react'
import classes from "../../styles/songPage.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { ConnectButton } from "web3uikit";
import FansList from '../components/fansList';
import Link from 'next/link';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/router";    
function SongPage({setSongLink}) {
    const Data={
     url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
     name: "Gaani",
     artistName: "Guri",
     price: 0.5,
     desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
     owner:"nssad12e91901dsld"
   };
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

        <div className="home_right1">
          <div className={classes.songpage_main}>
            <h1>Song Details</h1>
            <div className={classes.song1}>
              <div className={classes.song_left}>
                <img src={Data.url} />
              </div>
              <div className={classes.song_center}>
                <div className={classes.labelss}>
                  <p>Song Name</p>
                  <p>Song Description</p>
                  <p>Artist Name</p>
                  <p>Price</p>
                  <p>Satus</p>
                  <p>Owner</p>
                </div>
                <div className={classes.details}>
                  <p>: {Data.name}</p>
                  <p>: {Data.desc}</p>
                  <p>: {Data.artistName}</p>
                  <p>: {Data.price}</p>
                  <p>: {Data.sold ? `For Sale` : `Sold`}</p>
                  <p>: {Data.owner}</p>
                </div>
              </div>
              <div className={classes.song_right}>
                <button className={classes.play_btn}>Play</button>
                <button className={classes.buy_nft}>Buy NFT</button>
                <button className={classes.buy_nft}>Resell NFT</button>
              </div>
            </div>
            <div className={classes.fans_list}>
              <div className={classes.artist_fans}>
                <h1>Top Fans</h1>
                <div className={classes.songs_table}>
                  {fanData.map((d, index) => (
                    <FansList fanData={d} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongPage 