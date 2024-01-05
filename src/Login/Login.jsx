import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState([]);
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    try {
      const response = await axios.post(
        "http://26.30.1.50:8080/Api/v1.0/Login",
        {
          username: username,
          password: password,
        }
      );
      localStorage.setItem("token", response.data["token"]);
      var tokenn = localStorage.getItem("token");

      axios
        .get("http://26.30.1.50:8080/user", {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        })
        .then((response) => {
          setRole(response.data);
          console.log(response.data);
          if (
            response.data.authorities &&
            response.data.authorities.some(
              (authority) => authority.authority === "ROLE_ADMIN"
            )
          ) {
            alert("đ");
            navigate.push(`/admin`);
          } else {
            navigate.push(`/home`);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_form">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input id="username" type="text" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input id="password" type="password" />
            <label>Password</label>
          </div>
          <button onClick={handleSubmit} type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
