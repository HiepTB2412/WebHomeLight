import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="box">
        <div className="product mtop">
          <div className="img">
            {/* <span className="discount">{shopItems.discount}% Off</span> */}
            <img src={shopItems.image} alt="" />
            <div className="product-like">
              <label>{count}</label> <br />
              <i className="fa-regular fa-heart" onClick={increment}></i>
            </div>
          </div>
          <div className="product-details">
            <Link to={`/productdetail/${shopItems.id}`}>
              <h3>{shopItems.productName}</h3>
            </Link>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <h4>${shopItems.originPrice}.00 </h4>
              <button onClick={() => addToCart(shopItems)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
