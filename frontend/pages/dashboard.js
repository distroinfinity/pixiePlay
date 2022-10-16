import React, { useState, useEffect } from "react";
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
import SongCard from "./components/Cards/songCard";
import EventList from "./components/eventList/eventList";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Web3Modal from "web3modal";
import axios from "axios";
import { ethers } from "ethers";
import sha256 from "./helperfunctions/hash";
import Loader from "./components/loader";
import { marketplaceAddress } from "./../../backend/config";
import NFTMarketplace from "./../../backend/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { Router } from "next/router";
import { useRouter } from "next/router";
import FansList from "./components/fansList";

function Dashboard({ setSongLink }) {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [myNfts, setMyNfts] = useState([]);
  const [Events, setEvents] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [noOfTickets, setNoOfTickets] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    loadNFTs();
    loadEvents();
  }, []);

  async function scheduleEvent(e) {
    e.preventDefault();
    console.log("creating event/......", name, desc, link, date);
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const transaction = await contract.createEvent(
      name,
      desc,
      link,
      date,
      noOfTickets,
      price
    );

    transaction.wait();
    console.log("created");
    handleClose();
    setEvents((e) => [
      ...e,
      {
        name: name,
        description: desc,
        meetlink: link,
        schedule: date,
        tickets: noOfTickets,
        price: price,
      },
    ]);
  }
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await contract.fetchItemsListed();
    // console.log(data);
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        const hash = await sha256(
          tokenUri.replace("https://music-mania.infura-ipfs.io/ipfs/", "")
        );
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
          identiconHash: hash,
          artist: i.artist,
          sold: i.sold,
          audio: meta.data.image,
          cover: i.cover,
        };
        return item;
      })
    );
    console.log("refined my nfts", items);
    setMyNfts(items);
    setLoadingState(false);
  }
  async function loadEvents() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await contract.fetchEvents();
    // console.log("event data", data);

    const items = await Promise.all(
      data.map(async (i) => {
        let price =
          ethers.utils.formatUnits(i._priceOfTicket.toString(), "ether") * 1e18;
        let noOfTickets =
          ethers.utils.formatUnits(i.noOfTickets.toString(), "ether") * 1e18;
        let item = {
          description: i.description,
          meetlink: i.meetlink,
          name: i.name,
          schedule: i.schedule,
          noOfTickets: noOfTickets,
          price: price,
        };
        return item;
      })
    );
    console.log("refined events", items);
    setEvents(items);
  }

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
    if (name === "noOfTickets") {
      setNoOfTickets(value);
    }
    if (name === "price") {
      setPrice(value);
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
          {/* <div className="search_div">
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
            />
            <BiSearch />
          </div> */}
        </div>
        <div className="header_right">
          <ConnectButton moralisAuth={false} />
        </div>
      </div>
      {loadingState ? (
        <Loader />
      ) : (
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
                <p>Owned Music</p>
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
                {myNfts.length == 0 && (
                  <h5
                    style={{
                      textAlign: "center",
                      width: "100%",
                      color: "grey",
                    }}
                  >
                    You haven't minted any music yet.....
                  </h5>
                )}
                {myNfts.map((d, index) => (
                  <SongCard
                    key={index}
                    songData={d}
                    setSongLink={setSongLink}
                  />
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
                      <Form.Label>Venue</Form.Label>
                      <Form.Control
                        type="text"
                        name="link"
                        value={link}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>No Of tickets</Form.Label>
                      <Form.Control
                        type="number"
                        name="noOfTickets"
                        value={noOfTickets}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Label>Price of tickets</Form.Label>
                      <Form.Control
                        type="text"
                        name="price"
                        value={price}
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
                        <button
                          onClick={(e) => scheduleEvent(e)}
                          className={classes.buy_btn}
                        >
                          Add Event
                        </button>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
                <h1>My Events</h1>
                <br />
                <button onClick={handleShow} className={classes.createEvent}>
                  Create Event
                </button>
                {Events.length == 0 && (
                  <h5 style={{ color: "grey" }}>
                    You haven't created any events yet...
                  </h5>
                )}
                {Events.map((e, index) => (
                  <EventList eventData={e} index={index} />
                ))}
                <div className={classes.events}></div>
              </div>

              {/* <div className={classes.fans_div}>
             
              {fansData.map((d, index) => (
                <FansList key={index} fanData={d} />
              ))}
          </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
