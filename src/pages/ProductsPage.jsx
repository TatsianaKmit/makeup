import React, { useState, useEffect } from "react";
import ProductsList from '../components/products/ProductsList'
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

  console.log(details);

  const filterProducts = (selectedValues, details) => {

    // const filteredbyBrand = details.filter(item => (item.brand === selectedBrand))
    // const filteredbyCategory = details.filter(item => item.product_type === selectedCategory);
    // const filteredbyTag = details.filter(item => item.tag_list.includes(selectedTag));

    // const searchMatch = searchValue ? product.name.toLowerCase().includes(searchValue.toLowerCase())

    let filteredDetails = details;

    if (selectedValues.category) {
      filteredDetails = filteredDetails.filter((detail) => detail.product_type === selectedValues.category);
    }

    if (selectedValues.brand) {
      filteredDetails = filteredDetails.filter((detail) => detail.brand === selectedValues.brand);
    }

    if (selectedValues.tag) {
      filteredDetails = filteredDetails.filter((detail) => detail.tag_list.includes(selectedValues.tag));
    }

    console.log(selectedValues, details);

    return filteredDetails;




  }

  return (
    <>
      {filterUrl === "brands" ? <DataFilter filterProducts={filterProducts} filterUrl={filterUrl} brand={brand} /> : filterUrl === 'catalog' ? <DataFilter filterProducts={filterProducts} filterUrl={filterUrl} category={category} /> : <DataFilter filterProducts={filterProducts} filterUrl={filterUrl} tag={tag} />}
      {loading ? <Spin className='spin' /> : <ProductsList details={filteredDetails.length > 0 ? filteredDetails : details} />}
    </>
  );
}

// console.log('Products Page, details: ', details);
// const filDetails = details.filter(item => item.brand === 'nyx');
// const organicItems = details.filter(item => item.tag_list.includes('Organic'));
// console.log('Products Page, filDetails: ', filDetails, 'tagDetails: ', organicItems);

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