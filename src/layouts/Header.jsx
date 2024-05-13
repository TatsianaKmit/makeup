import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/header.scss";

export default function Header() {

  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src="assets/logo.png" alt="logo" className="header-logo" />
      </NavLink>
      <NavLink to={"/"} className="header-link">
        Home
      </NavLink>
      <NavLink to={"/"} className="header-link">
        About
      </NavLink>
      <NavLink to={"/catalog"} className="header-link">
        Products
      </NavLink>
      <NavLink to={"/brands"} className="header-link">
        Brands
      </NavLink>
      <NavLink to={"/"} className="header-link">
        Contact
      </NavLink>
    </div>
  );
}