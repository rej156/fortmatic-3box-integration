import React from "react";
import Box from "../3box-js/lib/3box";
import Web3 from "web3";
import Fortmatic from "fortmatic";

const handleClickFM = async () => {
  // Request user login if needed, returns current user account address
  // try {
  const fm = new Fortmatic("APIKEYGOESHERE");
  const fmProvider = fm.getProvider();
  window.fmProvider = fmProvider;
  window.web3 = new Web3(fmProvider);
  await window.web3.currentProvider.enable();
  // const box = await Box.openBox("0x12345abcde", fmProvider);
  // } catch (err) {
  //   console.error(err);
  // }
};

const handleClickThreeBox = async () => {
  // Request user login if needed, returns current user account address
  try {
    Box.openBox(window.web3.currentProvider.account, window.fmProvider)
      .then(box => {
        window.box = box;
        console.log("woo");
        box.onSyncDone(data => console.log(data));
      })
      .catch(err => console.error(err));
    // window.box = box;
  } catch (err) {
    console.error(err);
  }
};

const Component = () => (
  <div>
    <p onClick={handleClickFM}>fortmatic</p>
    <p onClick={handleClickThreeBox}>3box</p>
  </div>
);

export default Component;
