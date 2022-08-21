import React, {useState,useEffect} from "react";
import * as fcl from "@onflow/fcl";
import classes from "../../styles/page.module.css"

fcl.config({
    "app.detail.title": "Mint Page",
    "app.detail.icon": "https://placekitten.com/g/200/200",

    "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
    // "discovery.authn.endpoint": "https://fcl-discovery.onflow.org/api/testnet/authn",
    // "discovery.authn.include": ["0x123"] // Service account address
  })

export default function ConnectWallet() {
    const [user, setUser] = useState();

    const logIn = () => {
        //brings up login prompt
        fcl.authenticate();
        //stores user data
        fcl.currentUser().subscribe(setUser);
    }

    return (
        <div className={classes.connectWallet}>
            <button onClick={() => logIn()}>Connect Wallet</button>
            <h1>Account address: {user && user.addr ? user.addr : ''}</h1>
        </div> 
    );
}
