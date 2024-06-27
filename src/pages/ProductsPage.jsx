import React, { useState, useEffect } from "react";
import {
  fetchProductsList
} from "../services/GET";
import DataFilter from "../components/SearchAndFilter/DataFilter";
import useSearch from "../hooks/useSearch";

export default function ProductsPage(props) {
  const { searchedDetails } = useSearch()
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(window.location.search);
  const filterUrl = searchParams.get("filter");
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");

  useEffect(() => {
    fetchProductsList({ type: category, brand, tag, filter: filterUrl })
      .then((response) => {
        setLoading(false);
        setDetails(response);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category, brand, tag]);

  return (
    <>
      <div className="products-page">
        {filterUrl === "brands" ? <DataFilter details={details} filterUrl={filterUrl} loading={loading} /> : filterUrl === 'catalog' ? <DataFilter details={details} filterUrl={filterUrl} loading={loading} /> : filterUrl === 'search' ? <DataFilter details={details} searchedDetails={searchedDetails} filterUrl={filterUrl} loading={loading} /> : <DataFilter details={details} filterUrl={filterUrl} loading={loading} />}
      </div>
    </>
  );
}
