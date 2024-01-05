import React from "react";
import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import axios from "axios";


const Categories = () => {
  // const data = [
  //   {
  //     id: 1,
  //     cateImg: "./images/category/cat1.png",
  //     cateName: "Đèn Chùm",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //       {
  //         id: 3,
  //         cateName: "Đèn chùm ",
  //       },
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm khách sạn",
  //       },
  //       {
  //         id: 3,
  //         cateName: "Đèn chùm khách sạn",
  //       },
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm khách sạn",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     cateImg: "./images/category/cat2.png",
  //     cateName: "Đèn Thả",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     cateImg: "./images/category/cat3.png",
  //     cateName: "Đèn Mâm Ốp Trần",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     cateImg: "./images/category/cat4.png",
  //     cateName: "Đèn Gương",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     cateImg: "./images/category/cat5.png",
  //     cateName: "Đèn Bàn - Đèn Cây",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     cateImg: "./images/category/cat6.png",
  //     cateName: "Đèn Tường",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     cateImg: "./images/category/cat7.png",
  //     cateName: "Quạt Trần",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     cateImg: "./images/category/cat8.png",
  //     cateName: "Đèn Led",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     cateImg: "./images/category/cat9.png",
  //     cateName: "Đèn Ngoài Trời",
  //     children: [
  //       {
  //         id: 2,
  //         cateName: "Đèn chùm hiện đại",
  //       },
  //     ],
  //   },
  // ];

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
    <div className="category">
      {Categorys.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
