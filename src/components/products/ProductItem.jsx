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
          <div className="products-list__details">
            <span>{details.price}</span>
            <span>{details.brand}</span>
            <span>{details.category}</span>
            <span>{details.product_type}</span>
            <span>{details.name}</span>
          </div>
          <div className="products-list__photo_enlarged">
            {imageLoading && <Spin className='spin' />}
            {(details.image_link && details.image_link !== "ERROR") ? (
              <img src={details.image_link} onLoad={handleImageLoad} onError={() => { details.image_link = "ERROR"; setDetails({ ...details }) }} />
            ) : (
              <img src={`https://placehold.co/400x400@3x?text=${details.product_type}`} onLoad={handleImageLoad} />
            )}
          </div>
          <div className="products-list__description">
            <p>{details.description}</p>
          </div>
          <div className="products-list__colors-wrapper">
            {
              details.product_colors.length > 0 ?
                (
                  <>
                    <h5>Colors:</h5>
                    <ProductColors />
                  </>
                ) : (
                  null
                )
            }
          </div>
        </Card>
      )}
    </>
  );
}