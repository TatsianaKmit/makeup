import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductItem from "./components/products/ProductItem";
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from "@gravity-ui/uikit";
import ClassifiersPage from "./pages/ClassifiersPage";
import { SearchProvider } from "./context/context";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";




function App() {

  return (
    <>
      <ThemeProvider theme="light">

        <SearchProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />

              <Route path="about" element={<AboutPage />} />

              <Route path="brands" element={<ClassifiersPage type="brands" />} />
              <Route path="catalog" element={<ClassifiersPage type="catalog" />} />

              <Route path="products" element={<ProductsPage />} />
              <Route path="product/:id" element={<ProductItem />} />

              <Route path="contact" element={<ContactPage />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </SearchProvider>

      </ThemeProvider>
    </>
  );
}

export default App;
