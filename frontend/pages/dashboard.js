import React,{useState} from 'react'
import classes from "../styles/dashboard.module.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
// import Logo from "./../assets/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import Link from "next/link";
import SongCard from './components/Cards/songCard';
import EventList from './components/eventList/eventList';
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Dashboard({setSongLink}) {
     const data = [
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artist: "Guri",
      price: 0.5,
      desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
    },
    {
      url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
      name: "Gaani",
      artist: "Guri",
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

  const events = [
    {
      name: "meetUp",
      description: "just meeting for fun",
      time: "10pm 3 Dec,2022",
      link: "linkkk",
    },
    {
      name: "meetUp",
      description: "just meeting for fun",
      time: "10pm 3 Dec,2022",
      link: "linkkk",
    },
    {
      name: "meetUp",
      description: "just meeting for fun",
      time: "10pm 3 Dec,2022",
      link: "linkkk",
    },
  ];
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
    const [date, setDate] = useState();
    const [desc, setDesc] = useState();
    const [link, setLink] = useState();
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
     if (name === "date") {
       setDate(value);
     }
      if (name === "desc") {
        setDesc(value);
      }
       if (name === "link") {
         setLink(value);
       }
  }


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
            <div className="side_mini ">
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
          <Link href="/mymusic">
            <div className="side_mini">
              <MdLibraryMusic />
              <p>My music</p>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="side_mini active">
              <IoPersonOutline />
              <p>Creator Dashboard</p>
            </div>
          </Link>
        </div>

        <div className="home_right">
          <div className={classes.dashboard_main}>
            <h1>My NFTs</h1>
            <br />
            <div className={classes.dashboard_nfts}>
              {data.map((d, index) => (
                <SongCard key={index} songData={d} setSongLink={setSongLink} />
              ))}
            </div>
            <div className={classes.events_div}>
              <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>Add Event Details</Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="desc"
                      value={desc}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Date & Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="date"
                      value={date}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="link"
                      value={link}
                      onChange={handleChange}
                    ></Form.Control>
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <button className={classes.buy_btn}>Add Event</button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
              <h1>My Events</h1>
              <br />
              <button onClick={handleShow} className={classes.createEvent}>
                Create Event
              </button>
              <div className={classes.events}>
                {events.map((e, index) => (
                  <EventList eventData={e} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard