import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/products.list";
import {
  fetchProductsListbyType,
  fetchProductsListbyBrand,
} from "../services/GET";
import { Link, useParams } from "react-router-dom";

/////////// ----------- COMMON PAGE TO MERGE ProductsPageBrands and ProductsPageCatalog ---------//////////

export default function ProductsPage({ name }) {
  const [byTypes, setByTypes] = useState(false);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // const params = useParams();
  // const name = params.name;
  // const brand_name = params.brand_name;

  // const { name, brand_name } = useParams();
  // console.log("USE_PARAMS", name, brand_name);

  useEffect(() => {
    if (byTypes) {
      fetchProductsListbyType(name).then((response) => {
        setDetails(response);
        console.log("DATA:", response, "parameter name", name);
      });
    } else {
      fetchProductsListbyBrand().then((response) => {
        setDetails(response);
        console.log("DATA:", response, "parameter brand_name");
      });
    }
  }, []);

  return (
    <ProductsList
      // byTypes={byTypes}
      details={details}
      name={name}
      // setDetails={setDetails}
      // name={name}
      // brand_name={brand_name}
    />
  );
}
