import React, { useState, useEffect } from "react";
import { fetchProductsListbyType } from "../../services/GET";
import { Link, useParams } from "react-router-dom";

export default function ProductsListbyType() {
  const [details, setDetails] = useState([]);

  const {name} = useParams()

  useEffect(() => {
    fetchProductsListbyType(name).then((response) => {
      setDetails(response);
      console.log("by type:", response);
    });
  }, [name]);

  return (
    <div className="products-container">
      <h1>Main Products List by Type</h1>
      <ul>
        {details &&
          details.map((detail) => {
            return (
              <li key={detail.id}>
                <Link to={`product/${detail.id}`}><p>{detail.name}</p></Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
