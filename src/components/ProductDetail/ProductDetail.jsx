import React from "react";
import { Container } from "reactstrap";
import "./style.css";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = ({ CartItem, addToCart, decreaseQty }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://26.30.1.50:8080/api/v1.0/ProductDetail/" +
          window.location.pathname.substring(15)
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {});
  }, []);

  const {
    productName,
    productCode,
    originPrice,
    image,
    description,
    publishedDate,
    sale,
  } = products;

  if (products.sale) {
    return (
      <section>
        <Container className="container_detail">
          <div className="row1">
            <div className="tour__content">
              <img src={image} alt="" />

              <div className="tour__info">
                <h2>{productName}</h2>
                <ul className="tour__extra-details">
                  <li>
                    <i class="ri-creative-commons-nd-line"></i>Mã sản phẩm:{" "}
                    {productCode}
                  </li>
                  <li>
                    {" "}
                    <i class="ri-creative-commons-nd-line"></i>PublishedDate:{" "}
                    {publishedDate}
                  </li>
                  <div class="clear"></div>
                </ul>

                <div className="bought">
                  <h4 className="origin_price">{originPrice} đ</h4>
                  <h4 className="sale_price">
                    {(originPrice * (100 - sale.numberSale)) / 100} đ
                  </h4>
                  <Cart
                    CartItem={CartItem}
                    addToCart={addToCart}
                    decreaseQty={decreaseQty}
                  />
                </div>

                <div className="desc">
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  } else {
    return (
      <section>
        <Container>
          <div className="row1">
            <div className="tour__content">
              <img src={image} alt="" />

              <div className="tour__info">
                <h2>{productName}</h2>
                <ul className="tour__extra-details">
                  <li>
                    <i class="ri-creative-commons-nd-line"></i>Mã sản phẩm:{" "}
                    {productCode}
                  </li>
                  <li>
                    {" "}
                    <i class="ri-creative-commons-nd-line"></i>PublishedDate:{" "}
                    {publishedDate}
                  </li>
                  <div class="clear"></div>
                </ul>

                <div className="bought">
                  <h4>Origin Price: {originPrice}</h4>
                  <Cart
                    CartItem={CartItem}
                    addToCart={addToCart}
                    decreaseQty={decreaseQty}
                  />
                </div>

                <div className="desc">
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
};

export default ProductDetail;
