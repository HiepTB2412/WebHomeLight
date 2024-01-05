import React from "react";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "../ProductAdmin/CategoryForm";
import { useHistory } from "react-router-dom";

const EditCategory = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Categories")
      .then((response) => {
        setCate(response.data);
      })
      .catch((error) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useHistory();

  const click = () => {
    var categoryName = document.getElementById("catename").value;
    var parent = document.getElementById("Category").value;
    var tokenn = localStorage.getItem("token");
    var id = window.location.pathname.substring(14);
    alert(id);
    axios
      .put(
        "http://26.30.1.50:8080/api/v1.0/Category/" + id,
        {
          categoryName: categoryName,
          parent: parent,
        },
        {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        }
      )
      .then((response) => {
        navigate.push(`/categoryadmin`);
        alert("d");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addcate">
      <Form.Label htmlFor="catename">Category Name</Form.Label>
      <Form.Control
        type="text"
        id="catename"
        aria-describedby="passwordHelpBlock"
      />
      <div>
        <h5>Chọn Category cha</h5>
        <select id="Category">
          {cate.map((item, index) => (
            <CategoryForm key={index} item={item} />
          ))}
        </select>
      </div>
      <button onClick={click}>Update</button>
    </div>
  );
};

export default EditCategory;
