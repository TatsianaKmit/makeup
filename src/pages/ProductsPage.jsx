import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import {
  fetchProductsList
} from "../services/GET";
import DataFilter from "../components/SearchAndFilter/DataFilter";
import { Spin } from "@gravity-ui/uikit";

export default function ProductsPage() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let searchParams = new URLSearchParams(window.location.search);
  let filterUrl = searchParams.get("filter");
  let brand = searchParams.get("brand");
  let category = searchParams.get("category");

  const searchProducts = (setCategory, setBrand) => {
    let newFilter;
    let typeParam;
    let brandParam;

    if (filterUrl === 'brands') {
      typeParam = setCategory;
      brandParam = brand;
    } else if (filterUrl === 'catalog') {
      typeParam = category;
      brandParam = setBrand;
    }

    if ((filterUrl === 'brands' && setCategory) || (filterUrl === 'catalog' && setBrand)) {
      newFilter = "crossSelected";
      fetchProductsList({ type: typeParam, brand: brandParam, filter: newFilter })
        .then((response) => {
          setLoading(false)
          setDetails(response);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    fetchProductsList({ type: category, brand, filter: filterUrl })
      .then((response) => {
        setLoading(false)
        setDetails(response);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category, brand, filterUrl]);

  return (
    <>
      {filterUrl === "brands" ? <DataFilter searchProducts={searchProducts} filterType="catalog" /> : <DataFilter searchProducts={searchProducts} filterType="brands" />}
      {loading ? <Spin className='spin' /> : <ProductsList details={details} />}
    </>
  );
}