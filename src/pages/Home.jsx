import React, { useState } from "react";
import ProductsList from "../components/Product/ProductsList";
import Prealoader from "../components/Preloader/Preloader";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? <Prealoader/> : <ProductsList  />} */}
      {/* <ProductsList /> */}
    </>
  );
}
