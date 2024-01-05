import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
const Customer = () => {
  const [proCustomer, setProCustomer] = useState([]);

  useEffect(() => {
    var tokenn = localStorage.getItem("token");
      axios
        .get("http://26.30.1.50:8080/api/v1.0/Orders", {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        })
        .then((response) => {
          setProCustomer(response.data)
        })
        .catch((error) => {
          console.log(error)
        });
  }, []);

  return (
    <div className="container_product">
      <NavbarAdmin />
      <Table striped bordered hover>
        <thead>
          <tr className="table_head">
            <th>ID</th>
            <th>Arrived</th>
            <th>Email</th>
            <th>Phone</th>
            <th>List Product</th>
          </tr>
        </thead>
        <tbody>
          {proCustomer.map((pro, index) => (
            <tr key={index}>
              <td>{pro.id}</td>
              <td>{pro.arrived}</td>
              <td>{pro.email}</td>
              <td>{pro.phone}</td>
              <td>
                <Button variant="danger">
                  <Link to={`/customerdetail/${pro.id}`}>Detail</Link>
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
