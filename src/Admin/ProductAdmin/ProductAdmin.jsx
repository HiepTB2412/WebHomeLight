import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Products")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setProducts(response.data);
      })
      .catch((error) => {});
  }, [click]);

  const handle = (id) => {
    // window.confirm("Do want to delete ?");
    if (window.confirm("Do want to delete ?") === true) {
      var tokenn = localStorage.getItem("token");
      axios
        .delete("http://26.30.1.50:8080/api/v1.0/ProductDetail/" + id, {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        })
        .then((response) => {
          setClick(!click);
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="container_product">
      <NavbarAdmin />
      <Link to="/addproduct">
      <Button className="button_admin" variant="danger">Add Product</Button>{' '}
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr className="table_head">
            <th>ProductID</th>
            <th>ProductName</th>
            <th>ProductCode</th>
            <th>Price</th>
            <th>PublishedDate</th>
            <th>Status Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.productCode}</td>
              <td>{product.originPrice}</td>
              <td>{product.publishedDate}</td>
              <td>{product.status}</td>
              <td>{product.description}</td>
              <td>
                <Link to={`/editproduct/${product.id}`}>
                  <i className="action_edit ri-edit-2-line"></i>
                </Link>
                <button onClick={() => handle(product.id)}>
                  <i className="ri-delete-bin-5-line"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductAdmin;
