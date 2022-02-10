import React, { useState, useEffect } from "react";
import Header from "./Header";
import Featured_Section from "./Featured_Section";
import Featured_Products from "./Featured _Products";
import Latest_Product from "./Latest_Product";
import Offer from "./Offer";
import Testinomial from "./Testinomial";
import Brands from "./Brands";
import Navbar from "../Navbar";
import Featured_Product_Home from "./Featured_product_Home";
import Latest_Product_Home from "./Latest_Product_Home";

const Home = () => {
  let [to, setTo] = useState(0);

  async function gettotla() {
    var resp = await fetch("http://localhost:5000/cart/totalorder");
    var data = await resp.json();

    setTo(data.to);
  }
  useEffect(() => {
    // document.title = `Eshop(${count})`;
    gettotla();
  }, [to]);
  return (
    <>
      <Navbar totalo={to} key={to} />
      <Header />
      <Featured_Section />
      <Featured_Product_Home />
      <Latest_Product_Home />
      <Offer />
      <Testinomial />
      <Brands />
    </>
  );
};

export default Home;
