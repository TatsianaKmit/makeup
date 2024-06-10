import React from "react";
import { Outlet } from "react-router-dom";
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
