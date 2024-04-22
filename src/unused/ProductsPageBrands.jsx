import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import {
  fetchProductsListbyType,
  fetchProductsListbyBrand,
} from "../services/GET";
import { useParams } from "react-router-dom";
import SortByType from "../components/SortAndFilter/SortByType";

export default function ProductsPageBrands() {
  const [details, setDetails] = useState([]);


  const { brand_name } = useParams();
  console.log("USE_PARAMS", brand_name);

  useEffect(() => {
    fetchProductsListbyBrand(brand_name).then((response) => {
      setDetails(response);
      console.log("DATA:", response, "parameter name", brand_name);
    });
  }, [brand_name]);

  return (
    <>
      <SortByType />
      <ProductsList details={details} brand_name={brand_name} />
    </>
  );
}
