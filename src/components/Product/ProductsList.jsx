import React, { useState, useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";
import { fetchProductsList } from "../../services/GET";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsList().then((response) => {
      setDetails(response);
      console.log("DATA:", response);
    });
  }, []);

  return (
    <>
      <h1>Main Products List Brand + Type</h1>
      <div className="products-container">
        <ul>
          {details &&
            details.map((detail) => {
              return (
                <li key={detail.id}>
                  <Link to={`/product/${detail.id}`}>
                    <p>{detail.name}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
