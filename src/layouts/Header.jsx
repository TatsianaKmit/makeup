import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/header.scss";
import SortByType from "../components/SortAndFilter/SortByType";

export default function Header() {

  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src="assets/logo.png" alt="logo" className="header-logo" />
      </NavLink>
      <NavLink to={"/categories"} className="header-link">
        CATALOG
      </NavLink>
      <NavLink to={"/brands"} className="header-link">
        BRANDS
      </NavLink>
      <img src="assets/search.png" alt="search" className="header-search" />
    </div>
  );
}
