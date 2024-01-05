import React from "react";
import FlashDeals from "../flashDeals/FlashDeals";
import Product from "./Product";
import SideBar from "./SideBar";
import "./style.css";

const CateProdetail = ({ addToCart, productItems, shopItems }) => {
  return (
    <>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <div className="category_detail category_mobile">
        <SideBar />
        <Product shopItems={shopItems} addToCart={addToCart} />
      </div>
    </>
  );
};

export default CateProdetail;
