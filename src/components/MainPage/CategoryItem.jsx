import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function CategoryItem({ item }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };
  if (item.children) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="category-item"
      >
        <Link to={`/catedetail/${item.id}`}>
          <div className="category-title category_parent">
            <span>{item.categoryName}</span>
          </div>
        </Link>

        <div className={isSubMenuOpen ? "category-content" : "notcategory"}>
          {item.children.map((child) => (
            <Link to={`/catedetail/${child.id}`}><CategoryItem item={child} /></Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="category-item category_child">
        <div className="category-title ">
          <i class="ri-arrow-right-s-fill"></i>
          <span>{item.categoryName}</span>
        </div>
      </div>
    );
  }
}
