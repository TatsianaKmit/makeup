import React, { useState, useEffect } from "react";
import { fetchProductsListbyBrand } from "../../services/GET";
import {Link, useParams} from 'react-router-dom'


export default function ProductsListbyBrand() {
  const [details, setDetails] = useState([]);

  const {brand_name} = useParams()

  useEffect(() => {
    fetchProductsListbyBrand(brand_name).then((response) => {
      setDetails(response);
      console.log("by brand:", response);
    });
  }, [brand_name]);

  return (
    <div className="products-container">
      <h1>Main Products List by Brand</h1>
      <ul>
        {details &&
          details.map((detail) => {
            return (
              <li key={detail.id}>
               <Link to={`product/${detail.id}`}> <p>{detail.name}</p></Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
