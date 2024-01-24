import React, { useState, useEffect } from "react";
import { fetchProductsListbyBrand } from "../../services/GET";
import { Link, useParams } from "react-router-dom";
import SortByType from "../SortAndFilter/SortByType";

export default function ProductsListbyBrand() {
  const [details, setDetails] = useState([]);

  const [selected, setSelected] = useState("Select Category");

  const { brand_name } = useParams();

  useEffect(() => {
    fetchProductsListbyBrand(brand_name).then((response) => {
      setDetails(response);
      console.log("by brand:", response);
    });
  }, [brand_name]);

  return (
    <div className="products-container">
      <h4>Main Products List by Brand</h4>
      <SortByType selected={selected} setSelected={setSelected} />
      <ul>
        <div className="product-types">
          {details &&
            details.map((detail) => {
              return (
                <li key={detail.id}>
                  <Link to={`product/${detail.id}`}>
                    <div className="card small">
                      <div className="card-image">
                        <img src={detail.image_link} alt={detail.name} />
                      </div>
                      <div className="card-content">
                        <p>{detail.name}</p>
                        <p>{detail.brand}</p>
                        <p>{detail.price}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
}
