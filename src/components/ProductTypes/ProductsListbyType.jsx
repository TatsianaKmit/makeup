import React, { useState, useEffect } from "react";
import { fetchProductsListbyType, fetchProductsList } from "../../services/GET";
import { Link, useParams } from "react-router-dom";
import SortByBrand from "./../SortAndFilter/SortByBrand";

export default function ProductsListbyType() {
  const [details, setDetails] = useState([]);
  const [details2, setDetails2] = useState([]);
  const [selected, setSelected] = useState("");

  const { name } = useParams();

  useEffect(() => {
    fetchProductsListbyType(name).then((response) => {
      setDetails(response);
      console.log("by type:", response);
    });
  }, [name]);

  useEffect(() => {
    fetchProductsList(name, selected).then((response) => {
      setDetails2(response);
      console.log("DATA:", response);
    });
  }, [name, selected]);

  const clickHandler = (event) => {
    setSelected(event.target.dataset.type);
  };

  return (
    <div className="products-container">
      <h4>Main Products List by Type</h4>
      <SortByBrand
        selected={selected}
        setSelected={setSelected}
        details2={details2}
        clickHandler={clickHandler}
      />
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
  );
}
