import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "@gravity-ui/uikit";

export default function ProductsList({ details }) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      <h4>Products List</h4>
      <div className="products-container">
        <ul>
          <div className="product-types">
            {details.length === 0 ? (
              <p>No products found.</p>
            ) : (
              details.map((detail) => (
                <li key={detail.id}>
                  <Link to={`/product/${detail.id}`}>
                    <div className="card small">
                      {imageLoading && <Spin className='spin' />}
                      <div className="card-image">
                        <img
                          src={detail.image_link}
                          alt={detail.name}
                          onError={(e) => {
                            e.target.src = `https://placehold.co/400x500@3x?text=${detail.product_type}`;
                            setImageLoading(true)
                          }}
                          onLoad={handleImageLoad}
                        />
                      </div>
                      <div className="card-content">
                        <p>{detail.name}</p>
                        <p>{detail.brand}</p>
                        <p>{detail.price}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </div>
        </ul>
      </div>
    </>
  );
}