import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutMax() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-container" >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
