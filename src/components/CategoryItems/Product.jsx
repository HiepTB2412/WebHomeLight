import React from "react";
import ProductCart from "./ProductCart";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Product = ({ addToCart, shopItems }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();


  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/ProductByCategory/" + window.location.pathname.substring(12))
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch((error) => {});
  },[location]);
  return (
    <section className="shop background product_items product_mobile">
      <div className="container d_flex product product_container">
        <div className="content-items">
          {products.map((product) => (
            <div className="product-content  grid1">
              <ProductCart addToCart={addToCart} shopItems={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
