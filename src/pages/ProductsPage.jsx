import React, { useState, useEffect } from "react";
import {
  fetchProductsList
} from "../services/GET";
import DataFilter from "../components/SearchAndFilter/DataFilter";
import useSearch from "../hooks/useSearch";
import { useSearchContext } from "../context/context";

export default function ProductsPage(props) {
  const { details, loading } = useSearchContext()
  const [pageState, setPageState] = useState()

  const searchParams = new URLSearchParams(window.location.search);
  const filterUrl = searchParams.get("filter");
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const search = searchParams.get("search");

  // useEffect(() => {
  //   fetchProductsList({ type: category, brand, tag, filter: filterUrl })
  //     .then((response) => {
  //       setLoading(false);
  //       setDetails(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // }, [category, brand, tag]);

  useEffect(() => {
    if (filterUrl == 'catalog' && details.length > 0) {
      const catalogPage = details.filter(item => item.product_type
        == category)
      const pageData = catalogPage.length > 0 ? catalogPage : null
      setPageState(pageData)
    } else if (filterUrl == 'brands' && details.length > 0) {
      const brandsPage = details.filter(item => item.brand == brand)
      const pageData = brandsPage.length > 0 ? brandsPage : null
      setPageState(pageData)
    }
  }, [filterUrl])


  console.log('filterUrl', filterUrl);
  console.log('Product page details', details);
  console.log('pageState', pageState);

  return (
    <>
      <div className="products-page">
        {filterUrl === "brands" ? <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} /> : filterUrl === 'catalog' ? <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} /> : <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} />}
      </div>
    </>
  );
}
