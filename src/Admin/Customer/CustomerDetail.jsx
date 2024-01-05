import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

const CustomerDetail = () => {
  const id = window.location.pathname.substring(16);

  const [proCustomer, setProCustomer] = useState([]);

  useEffect(() => {
    var tokenn = localStorage.getItem("token");
    console.log(id);
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Orders", {
        headers: {
          Authorization: "Bearer " + tokenn,
        },
      })
      .then((response) => {
        setProCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table style={{ marginBottom: "20px" }} striped bordered hover>
      <thead>
        <tr className="table_head">
          <th>ProductName</th>
          <th>ProductCode</th>
          <th>OriginPrice</th>
          <th>Amount</th>
          <th>QuantityBuying</th>
          <th>PublishedDate</th>
        </tr>
      </thead>
      <tbody>
        {proCustomer
          .filter((item) => {
            return item.id.toString().includes(id);
          })
          .map((item, index) => {
            return (
              <>
                {item.products.map((item) => {
                  return (
                    <tr>
                      <th>{item.productName}</th>
                      <th>{item.productCode}</th>
                      <th>{item.originPrice}</th>
                      <th>{item.amount}</th>
                      <th>{item.quantityBuying}</th>
                      <th>{item.publishedDate}</th>
                    </tr>
                  );
                })}
              </>
            );
          })}
      </tbody>
    </Table>
  );
};

export default CustomerDetail;
