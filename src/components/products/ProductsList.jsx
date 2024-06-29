import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "@gravity-ui/uikit";

export default function ProductsList(props) {
  const { details } = props
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  console.log('ProductsList details', details);

  return (
    <>
      <div>
        <ul>
          <div className="products-list__container">
            {details && details.length === 0 ? (
              <p>No products found.</p>
            ) : (
              details && details.map((detail) => (
                <li key={detail.id}>

                  <div className="products-list__card_small">
                    {imageLoading && <Spin className='spin' />}
                    <div className="products-list__photo">
                      <Link to={`/product/${detail.id}`}>
                        <img
                          src={detail.image_link}
                          alt={detail.name}
                          onError={(e) => {
                            e.target.src = `https://placehold.co/400x500@3x?text=${detail.product_type}`;
                            setImageLoading(true)
                          }}
                          onLoad={handleImageLoad}
                        />
                      </Link>
                    </div>
                    <div className="products-list__titles">
                      <Link to={`/product/${detail.id}`}>
                        <p>{detail.name}</p>
                        <p>{detail.brand}</p>
                        <p>{`$${detail.price}`}</p>
                      </Link>
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>
        </ul>
      </div>
    </>
  );
}