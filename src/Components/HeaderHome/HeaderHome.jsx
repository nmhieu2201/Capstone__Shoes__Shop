import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
export default function HeaderHome() {
  return (
    <header className="header">
      <div className="top">
        <div className="container">
          <NavLink className="logo" to="">
            <img src="./img/logo.png" alt="" />
          </NavLink>
          <div className="cart">
            <div className="search">
              <span>
                {" "}
                <SearchOutlined />
                Search
              </span>
            </div>
            <div className="cart-shop">
              <span className="cart-shop">
                <ShoppingCartOutlined />
                (1)
              </span>
            </div>
            <div className="login">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="register">
              <NavLink to="">Register </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="container">
          <NavLink to="">Home</NavLink>
          <NavLink to="">Men</NavLink>
          <NavLink to="">Woman</NavLink>
          <NavLink to="">Kid</NavLink>
          <NavLink to="">Sport</NavLink>
        </div>
      </div>
    </header>
  );
}
