import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import {
  fetchProductsList
} from "../services/GET";
import DataFilter from "../components/SearchAndFilter/DataFilter";
import { Spin } from "@gravity-ui/uikit";

export default function ProductsPage() {
  const [details, setDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let searchParams = new URLSearchParams(window.location.search);
  let filterUrl = searchParams.get("filter");
  let brand = searchParams.get("brand");
  let category = searchParams.get("category");
  let tag = searchParams.get("tag");

  const searchProducts = (selectedCategory, selectedBrand, selectedTag, searchValue) => {
    fetchProductsList({ type: selectedCategory, brand: selectedBrand, tag: selectedTag, search: searchValue })
      .then((response) => {
        setLoading(false);
        setDetails(response);
        let filteredData = response.filter(product => {
          let categoryMatch = selectedCategory ? product.category === selectedCategory : true;
          let brandMatch = selectedBrand ? product.brand === selectedBrand : true;
          let tagMatch = selectedTag ? product.tag === selectedTag : true;
          let searchMatch = searchValue ? product.name.toLowerCase().includes(searchValue.toLowerCase()) : true;
          return categoryMatch && brandMatch && tagMatch && searchMatch;
        });
        setFilteredDetails(filteredData);
        console.log('selectedCategory: ', selectedCategory, 'selectedBrand: ', selectedBrand, 'selectedTag: ', selectedTag);

      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProductsList({ type: category, brand, tag, filter: filterUrl })
      .then((response) => {
        setLoading(false);
        setDetails(response);
        console.log('category: ', category, 'brand: ', brand, 'tag: ', tag, 'filterUrl: ', filterUrl);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category, brand, tag, filterUrl]);

  return (
    <>
      {filterUrl === "brands" ? <DataFilter searchProducts={searchProducts} filterType="catalog" /> : filterUrl === 'catalog' ? <DataFilter searchProducts={searchProducts} filterType="brands" /> : <DataFilter searchProducts={searchProducts} filterType="product_tags" />}
      {loading ? <Spin className='spin' /> : <ProductsList details={filteredDetails.length > 0 ? filteredDetails : details} />}
    </>
  );
}

//----------------------without tags-------------------//

// export default function ProductsPage() {
//   const [details, setDetails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   let searchParams = new URLSearchParams(window.location.search);
//   let filterUrl = searchParams.get("filter");
//   let brand = searchParams.get("brand");
//   let category = searchParams.get("category");
//   let tag = searchParams.get("tag");

//   const searchProducts = (setCategory, setBrand, searchValue) => {
//     let newFilter;
//     let typeParam;
//     let brandParam;

//     if (filterUrl === 'brands') {
//       typeParam = setCategory;
//       brandParam = brand;
//     } else if (filterUrl === 'catalog') {
//       typeParam = category;
//       brandParam = setBrand;
//     }

//     if (searchValue) {
//       newFilter = "search";
//       fetchProductsList({ type: setCategory, brand: setBrand, tag, filter: newFilter, search: searchValue })
//         .then((response) => {
//           setLoading(false);
//           setDetails(response);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     } else if

//       ((filterUrl === 'brands' && setCategory) || (filterUrl === 'catalog' && setBrand)) {
//       newFilter = "crossSelected";
//       fetchProductsList({ type: typeParam, brand: brandParam, tag, filter: newFilter, search: searchValue })
//         .then((response) => {
//           setLoading(false)
//           setDetails(response);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }

//   useEffect(() => {
//     fetchProductsList({ type: category, brand, tag, filter: filterUrl })
//       .then((response) => {
//         setLoading(false);
//         setDetails(response);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [category, brand, tag, filterUrl]);

//   return (
//     <>
//       {filterUrl === "brands" ? <DataFilter searchProducts={searchProducts} filterType="catalog" /> : <DataFilter searchProducts={searchProducts} filterType="brands" />}
//       {loading ? <Spin className='spin' /> : <ProductsList details={details} />}
//     </>
//   );
// }