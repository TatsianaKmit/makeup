import { Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";
import style from "./style/app.scss";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductItem from "./components/Product/ProductItem";
import ProductsListbyType from "./components/ProductTypes/ProductsListbyType";
import ProductsListbyBrand from "./components/Brands/ProductsListbyBrand";

function App() {
  return (
    <div className="container content #f48fb1 pink lighten-3">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/:brand_name" element={<ProductsListbyBrand />} />
          <Route path="brands/:brand_name/product/:id" element={<ProductItem />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:name" element={<ProductsListbyType />} />
          <Route path="catalog/:name/product/:id" element={<ProductItem />} />
          <Route path="product/:id" element={<ProductItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
