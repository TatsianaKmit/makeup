import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import {
  fetchProductsList
} from "../services/GET";
import { useSearchParams } from "react-router-dom";
import SortByBrand from "../components/SortAndFilter/SortByBrand";
import SortByType from "../components/SortAndFilter/SortByType";

/////////// ----------- COMMON PAGE TO MERGE ProductsPageBrands and ProductsPageCatalog ---------//////////

export default function ProductsPage({ name }) {
  const [details, setDetails] = useState([]);
  const [selected, setSelected] = useState("");
  const [filter, setFilter] = useState("");

  let searchParams = new URLSearchParams(window.location.search);
  let filterUrl = searchParams.get("filter");
  let brand = searchParams.get("brand");
  let category = searchParams.get("category");

  useEffect(() => {
    setFilter(filterUrl);
    fetchProductsList({ type: category, brand, filter: filterUrl }).then((response) => {
      setDetails(response);
    });
  }, [filterUrl, category, brand]);

  const clickHandler = (event) => {
    setSelected(event.target.dataset.type);
  };

  return (
    <>
      {filter === "brands" ? <SortByBrand selected={selected} clickHandler={clickHandler} /> : <SortByType />}
      <ProductsList details={details} name={name} filter={filter} />
    </>
  );
}