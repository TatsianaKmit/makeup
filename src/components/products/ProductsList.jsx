import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "@gravity-ui/uikit";
import { Card } from "@gravity-ui/uikit";

export default function ProductsList({ details }) {
  const [imageLoading, setImageLoading] = useState(true);

  const style = {
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // console.log(details)

  return (
    <>
      <div className="products-container">
        <ul>
          <div className="product-types">
            {details.length === 0 ? (
              <p>No products found.</p>
            ) : (
              details.map((detail) => (
                <li key={detail.id}>
                  <Link to={`/product/${detail.id}`}>
                    <Card style={style} view="outlined" type="container" size="l">
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
                    </Card>
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