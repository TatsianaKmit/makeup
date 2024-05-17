import React, { useState, useEffect } from "react";
import {
  fetchProductsList
} from "../services/GET";
import DataFilter from "../components/SearchAndFilter/DataFilter";

export default function ProductsPage(props) {
  const { searchValue } = props
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('Products Page', searchValue);

  const searchParams = new URLSearchParams(window.location.search);
  const filterUrl = searchParams.get("filter");
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const [search, setSearch] = useState('')

  const setFilterToSearch = (searhValue) => {
    setSearch(searchValue)
  }


  useEffect(() => {
    fetchProductsList({ type: category, brand, tag, filter: filterUrl, search: searchValue })
      .then((response) => {
        setLoading(false);
        setDetails(response);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category, brand, tag, filterUrl, search, setFilterToSearch]);

  return (
    <>
      {filterUrl === "brands" ? <DataFilter details={details} filterUrl={filterUrl} brand={brand} loading={loading} /> : filterUrl === 'catalog' ? <DataFilter details={details} filterUrl={filterUrl} category={category} loading={loading} /> : <DataFilter details={details} filterUrl={filterUrl} tag={tag} loading={loading} />}
    </>
  );
}
