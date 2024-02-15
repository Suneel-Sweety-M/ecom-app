import React from "react";
import "../styles/headder.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Headder = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  );
};

export default Headder;
