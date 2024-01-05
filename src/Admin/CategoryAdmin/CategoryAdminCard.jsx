import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CategoryAdminCard = ({ item }) => {
  const navigate = useHistory();
  const handle = (id) => {
    if (window.confirm("Do want to delete ?") === true) {
      axios
        .delete("http://127.0.0.1:8000/Admin/xoacategory/" + id)
        .then((response) => {
          navigate.push(`/categoryadmin`);
        })
        .catch((error) => {});
    }
  };
  if (item.children) {
    return (
      <div className="category-item">
        <Link to={`/catedetail/${item.id}`}>
          <div>
            <div className="category-admin category_parent">
              <div className="category_wrap">
                <span>
                  {" "}
                  <i class="ri-arrow-right-s-fill"></i>
                  {item.categoryName}
                </span>

                <div className="category_action">
                  <Link to={`/editcategory/${item.id}`}>
                    <i className="action_edit ri-edit-2-line"></i>
                  </Link>
                  <button onClick={() => handle(item.id)}>
                    <i className="ri-delete-bin-5-line"></i>
                  </button>
                </div>
              </div>
              <div className="category-content">
                {item.children.map((child) => (
                  <Link to={`/catedetail/${child.id}`}>
                    <CategoryAdminCard item={child} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="category-item category_child">
        <div className="category-title ">
          <span>{item.categoryName}</span>
          <Link to={`/editproduct/${item.id}`}>
            <i className="action_edit ri-edit-2-line"></i>
          </Link>
          <button onClick={() => handle(item.id)}>
            <i className="ri-delete-bin-5-line"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default CategoryAdminCard;
