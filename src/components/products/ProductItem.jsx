import React, { useState, useEffect } from "react";
import { fetchProductsItem } from "../../services/GET";
import { useParams } from "react-router-dom";
import ProductColors from "./ProductColors";
import { Button, Spin } from "@gravity-ui/uikit";

export default function ProductItem() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const { id } = useParams();

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
        <div className='products-list__wrapper'>
          <div className="products-list__card_big">

            <div className="products-list__block-titles">
              <div className="products-list__block-name"><span>{details.name}</span></div> <br />
              <span>{details.brand}</span>
            </div>

            <div className="products-list__photo_enlarged">
              {imageLoading && <Spin className='spin' />}
              {(details.image_link && details.image_link !== "ERROR") ? (
                <img src={details.image_link} onLoad={handleImageLoad} onError={() => { details.image_link = "ERROR"; setDetails({ ...details }) }} />
              ) : (
                <img src={`https://placehold.co/400x400@3x?text=${details.product_type}`} onLoad={handleImageLoad} />
              )}
            </div>

            <div className="products-list__block-categories">
              <span>{`product type: ${details.product_type}`}</span>
            </div>

            <div className="products-list__block-tags">
              {
                details.tag_list.length > 0 ?
                  (
                    <>
                      {details.tag_list.map(item => (
                        <Button className="products-list__block-tag">
                          {item}
                        </Button>
                      ))}
                    </>
                  ) : (
                    null
                  )
              }

            </div>



            <div className="products-list__colors-wrapper">
              {
                details.product_colors.length > 0 ?
                  (
                    <>
                      <ProductColors />
                    </>
                  ) : (
                    null
                  )
              }
            </div>

            <div className="products-list__description">
              <p>{details.description}</p>
            </div>

            <div className="products-list__block-price">
              <Button>
                {`$ ${details.price}`}
              </Button>
            </div>

          </div>
        </div >
      )
      }
    </>
  );
}