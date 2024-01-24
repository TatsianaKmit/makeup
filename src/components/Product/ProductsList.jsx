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
      <h4>Main Products List Brand + Type</h4>
      <div className="products-container ">
        <ul>
          <div className="product-types">
            {details &&
              details.map((detail) => {
                return (
                  <li key={detail.id}>
                    <Link to={`/product/${detail.id}`}>
                      <div className="card small">
                        <div className="card-image">
                          <img src={detail.image_link} alt={detail.name} />
                        </div>
                        <div className="card-content">
                          <p>{detail.name}</p>
                          <p>{detail.brand}</p>
                          <p>{detail.price}</p>
                        </div>
                        {/* <div className="card-action">
                          <p>Link?</p>
                        </div> */}
                      </div>
                    </Link>
                  </li>
                );
              })}
          </div>
        </ul>
      </div>
    </>
  );
}
