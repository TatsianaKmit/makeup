import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ details }) {
  return (
    <>
      <h4>Products List</h4>
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
