import React from "react";
import Link from "next/link";

import ReactDOM from "react-dom/client";
import "./home.css";

import classes from "./../styles/app.module.css";

// import App from "./App";

// import { MoralisProvider } from "react-moralis";

import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

// routing done here
// const root = ReactDOM.createRoot(document.getElementById("root"));
function MyApp({ Component, pageProps }) {
  return (
    <div className={classes.App}>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          {/* <Link href="/"></Link> */}
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
