import React, { useState, useEffect } from "react";
import DataFilter from "../components/SearchAndFilter/DataFilter";
import { useSearchContext } from "../context/context";

export default function ProductsPage() {
  const { details, loading, searchedDetails, searchValue, searchProducts } = useSearchContext()
  const [pageState, setPageState] = useState()

  const searchParams = new URLSearchParams(window.location.search);
  const filterUrl = searchParams.get("filter");
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const search = searchParams.get("search");

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
    } else if (filterUrl == 'product_tags' && details.length > 0) {
      const tagsPage = details.filter(item => item.tag_list.includes(tag))
      const pageData = tagsPage.length > 0 ? tagsPage : null
      setPageState(pageData)
    } else if (filterUrl == 'search' && details.length > 0) {
      const searchPage = details.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      const pageData = searchPage.length > 0 ? searchPage : null
      setPageState(pageData)
    }
  }, [filterUrl, searchValue])

  return (
    <>
      <div className="list-page">
        {filterUrl === "brands" ? <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} />
          : filterUrl === 'catalog' ? <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} />
            : filterUrl === 'search' ? <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} />
              : <DataFilter details={details} pageState={pageState} filterUrl={filterUrl} loading={loading} />}
      </div>
    </>
  );
}
