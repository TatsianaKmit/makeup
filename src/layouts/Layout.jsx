import React from "react";
import { NavLink, Outlet } from "react-router-dom"; /// NavLink - active link in CSS, Link - no
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutMax() {
  return (
    <>
    <div className="layout_wrapper">
      <header>
        <Header />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </>
  );
}
