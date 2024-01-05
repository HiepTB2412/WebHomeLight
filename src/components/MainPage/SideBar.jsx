import React from "react";
import SideBarItems from "./SideBarItems";
import { useState, useEffect } from "react";
import axios from "axios";

const SideBar = () => {
  const [Categorys, setCategorys] = useState([])

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
    <div className="sidebar">
      {Categorys.map((item, index) => (
        <SideBarItems key={index} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
