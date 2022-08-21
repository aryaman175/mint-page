import React from "react";
import Menu from "../components/menu/menu";
import Purchase from "../components/purchase/purchase";
import WalletButton from "../components/connectWallet/connectWallet";

export default function MintPage()
{
  return (
    <>
    <Menu />
    <Purchase />
    <WalletButton />
    </>
  );
}