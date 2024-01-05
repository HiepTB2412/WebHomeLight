import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryAdminCard from "./CategoryAdminCard";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CategoryAdmin = () => {
  const [Categorys, setCategorys] = useState([]);
  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Categories")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setCategorys(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="category category_admin">
      <Link to="/addcategory">
      <Button variant="danger" className="category_button">Add Category</Button>{' '}
      </Link>
      {Categorys.map((item) => (
        <CategoryAdminCard item={item} />
      ))}
    </div>
  );
};

export default CategoryAdmin;
