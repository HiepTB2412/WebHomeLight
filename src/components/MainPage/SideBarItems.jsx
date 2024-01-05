import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBarItems = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.children && item.children.length > 0) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <Link to={`/catedetail/${item.id}`}>
            <span>{item.categoryName}</span>
          </Link>
          <i className="ri-arrow-down-s-line" onClick={() => setOpen(!open)}></i>
        </div>
        <div className="sidebar-content">
          {item.children.map((child, index) => (
            <SideBarItems key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <Link to={`/catedetail/${item.id}`}>
            <span>{item.categoryName}</span>
          </Link>
        </div>
      </div>
    );
  }
};

export default SideBarItems;
