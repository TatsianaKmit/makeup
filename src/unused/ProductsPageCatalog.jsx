import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import { fetchProductsListbyType } from "../services/GET";
import { useParams } from "react-router-dom";
import SortByBrand from "../components/SortAndFilter/SortByBrand";

export default function ProductsPageCatalog() {
  const [details, setDetails] = useState([]);
  const [selected, setSelected] = useState("");

  const { name } = useParams();
  console.log("USE_PARAMS", name);

  useEffect(() => {
    fetchProductsListbyType(name).then((response) => {
      setDetails(response);
      console.log("DATA:", response, "parameter name", name);
    });
  }, [name]);

  const clickHandler = (event) => {
    setSelected(event.target.dataset.type);
  };

  return (
    <>
      <SortByBrand selected={selected} clickHandler={clickHandler} />
      <ProductsList details={details} name={name} />
    </>
  );
}
