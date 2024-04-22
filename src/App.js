import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";
import style from "./style/app.scss";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductItem from "./components/products/ProductItem";
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from "@gravity-ui/uikit";
import ClassifiersPage from "./pages/ClassifiersPage";

function App() {


  return (
    <ThemeProvider theme="light">
      <div className="container content #f48fb1 pink lighten-3">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="brands" element={<ClassifiersPage type="brands" />} />
            <Route path="categories" element={<ClassifiersPage type="categories" />} />

            {/* <Route path="brands/:brand_name" element={<ProductsPageBrands />} />
            <Route path="categories/:name" element={<ProductsPageCatalog />} /> */}

            {/* <Route path="brands/:brand_name/product/:id" element={<ProductItem />} />
            <Route path="categories/:name/product/:id" element={<ProductItem />} /> */}

            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductItem />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
