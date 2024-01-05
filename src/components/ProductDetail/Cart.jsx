import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://26.30.1.50:8080/api/v1.0/ProductDetail/" +
          window.location.pathname.substring(15)
      )
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {});
  }, []);

  const {
    id,
    // productName,
    // productCode,
    // originPrice,
    // image,
    // description,
    // publishedDate,
  } = product;

  // prodcut qty total
  return (
    <>
      <section>
        <div className="container d_flex">
          <div className="cart-details">
            <div className="d_flex product_" key={id}>
              <div className="cart-items-function">
                <div className="cartControl d_flex cartControl_">
                  <button className="incCart" onClick={() => addToCart(product)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  {CartItem.map((item) => {
                    return <h2>{item.qty}</h2>;
                  })}
                  <button className="desCart" onClick={() => decreaseQty(product)}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>

              <div className="cart-item-price"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
