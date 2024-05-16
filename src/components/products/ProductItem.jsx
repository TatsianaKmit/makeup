import React, { useState, useEffect } from "react";
import { fetchProductsItem } from "../../services/GET";
import { useParams } from "react-router-dom";
import ProductColors from "./ProductColors";
import { Spin } from "@gravity-ui/uikit";
import { Card } from "@gravity-ui/uikit";

export default function ProductItem() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const { id } = useParams();

  const style = {
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  useEffect(() => {
    fetchProductsItem(id).then((response) => {
      setLoading(false);
      setDetails(response);
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, [id]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Card style={style} view="filled" type="container" size="xl">
          <div className="card-headers">
            <span>{details.price}</span>
            <span>{details.brand}</span>
            <span>{details.category}</span>
            <span>{details.product_type}</span>
          </div>
          <span className="card-title">{details.name}</span>
          <div className="card-image">
            {imageLoading && <Spin className='spin' />}
            {(details.image_link && details.image_link !== "ERROR") ? (
              <img src={details.image_link} onLoad={handleImageLoad} onError={() => { details.image_link = "ERROR"; setDetails({ ...details }) }} />
            ) : (
              <img src={`https://placehold.co/400x500@3x?text=${details.product_type}`} onLoad={handleImageLoad} />
            )}
          </div>
          <div className="card-content">
            <p>{details.description}</p>
            <div className="product-colors">
              {
                details.product_colors.length > 0 ?
                  (
                    <>
                      <h5>Colours:</h5>
                      <ProductColors />
                    </>
                  ) : (
                    null
                  )
              }
            </div>
          </div>
        </Card>
      )}
    </>
  );
}