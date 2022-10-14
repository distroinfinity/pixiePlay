import React from "react";
import "./home.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import Logo from "../../assets/logo 2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "web3uikit";

function home() {
  return (
    <div>
      <div className="header_main">
        <div className="header_left">
          <Link to="/">
            <img src={Logo} />
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
          <div className="side_mini active">
            <AiOutlineHome />
            <p>Home</p>
          </div>
          <div className="side_mini">
            <RiMoneyDollarCircleLine  />
            <p>Mint new music</p>
          </div>
          <div className="side_mini">
            <AiOutlineHome />
            <p>My music</p>
          </div>
          <div className="side_mini">
            <IoPersonOutline />
            <p>Creater Dashboard</p>
          </div>
        </div>
        <div className="home_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default home;
