import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import "react-dropdown-tree-select/dist/styles.css";
import DropdownHOC from "./DropdownHOC";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [categorysTreeData, setCategorysTreeData] = useState([]);
  const [cate, setCate] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImageUrl(src);
    }
  };

  const transformToTreeData = (categories) => {
    return categories.map((category) => ({
      label: category.categoryName,
      value: category.id.toString(),
      ...(category.children && {
        children: transformToTreeData(category.children),
      }),
    }));
  };

  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Categories")
      .then((response) => {
        setCate(response.data);
        const treeData = transformToTreeData(response.data);
        setCategorysTreeData(treeData);
      })
      .catch((error) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [chaArray, setChaArray] = useState([]); // Step 1: Define the state variable

  // function updateNodeValue(node, targetValue, newValue) {
  //   if (node.value === targetValue) {
  //     node.value = newValue;
  //     return;
  //   }

  //   for (const child of node.children) {
  //     updateNodeValue(child, targetValue, newValue);
  //   }
  // }

  // Step 2: Create a function to update the state variable
  // const updateChaArray = (cha) => {
  //   setChaArray(cha);
  //   console.log("hi");
  // };

  const navigate = useHistory();

  const click = () => {
    // chaArray.forEach((parentNodes) => {
    //   var category = document.getElementById("Category").value;
    //   const lastParentNode = parentNodes[parentNodes.length - 1];
    //   updateNodeValue(lastParentNode, lastParentNode.value, category);
    //   console.log(lastParentNode);
    // });

    var productname = document.getElementById("name").value;
    var productcode = document.getElementById("code").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("file-input")
    var category = document.getElementById("Category").value;

    const formData = new FormData();
    formData.append("productName", productname);
    formData.append("productCode", productcode);
    formData.append("originPrice", price);
    formData.append("description", description);
    formData.append("image", image.files[0]);
    formData.append("categoryId", category);
    var tokenn = localStorage.getItem("token");
    var id = window.location.pathname.substring(13);
    alert(id);
    axios
      .put("http://26.30.1.50:8080/api/v1.0/ProductDetail/" + id, formData, {
        headers: {
          Authorization: "Bearer " + tokenn,
        },
      })
      .then((response) => {
        navigate.push(`/admin`);
        alert("d")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h3 className="edit_title">Edit Product</h3>
      <div className="edit_product">
        <div className="edit_input">
          <Form.Label htmlFor="name">Product Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="code">Product Code</Form.Label>
          <Form.Control
            type="text"
            id="code"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control id="description" as="textarea" rows={3} />
          </Form.Group>
          <h3>Chọn Category cần thay thế</h3>
          {categorysTreeData.length > 0 ? (
            <DropdownHOC data={categorysTreeData} />
          ) : (
            <p>Loading categories...</p>
          )}
          <h3>Chọn Category thay thế</h3>
          <select id="Category">
            {cate.map((item, index) => (
              <CategoryForm key={index} item={item} />
            ))}
          </select>
          <button onClick={click}>Update</button>
        </div>
        <div class="image-upload">
          <label for="file-input">
            <img src={imageUrl} alt="Thêm ảnh" />
          </label>
          <input id="file-input" type="file" onChange={handleImageChange} />
        </div>
      </div>
    </>
  );
};

export default EditProduct;
