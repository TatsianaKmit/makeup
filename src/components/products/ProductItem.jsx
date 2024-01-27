import React, { useState, useEffect } from "react";
import { fetchProductsItem } from "../../services/GET";
import { useParams } from "react-router-dom";
import ProductColorsList from "./Product_Colors/ProductColorsList";

export default function ProductItem() {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchProductsItem(id).then((response) => {
      setDetails(response);
      console.log("item_data:", response);
    });
  }, [id]);

  return (
    <div className="card large #fce4ec pink lighten-5">
      <div className="card-headers">
        <span>{details.price}</span>
        <span>{details.brand}</span>
        <span>{details.category}</span>
        <span>{details.product_type}</span>
      </div>
      <span className="card-title">{details.name}</span>
      <div className="card-image">
        <img src={details.image_link} />
      </div>
      <div className="card-content">
        <p>{details.description}</p>
        <div className="product-colors">
          <h5>Colours:</h5>
          <ProductColorsList />
        </div>
      </div>
    </div>
  );
}
