import React, { useState, useEffect } from "react";
import { fetchProductsItem } from "../../services/GET";
import { useParams } from "react-router-dom";
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
        <div className='spin'><Spin size="xl" /></div>
      ) : (
        <div className='item-page__container'>
          <div className="item-page__wrapper">

            <div className="item-page__titles">
              <div className="item-page__name"><span>{details.name}</span></div> <br />
              <span>{details.brand}</span>
            </div>

            <div className="item-page__photo">
              {imageLoading && <div className='spin'><Spin /></div>}
              {(details.image_link && details.image_link !== "ERROR") ? (
                <img src={details.image_link} onLoad={handleImageLoad} onError={() => { details.image_link = "ERROR"; setDetails({ ...details }) }} />
              ) : (
                <img src={`https://placehold.co/400x400@3x?text=${details.product_type}`} onLoad={handleImageLoad} />
              )}
            </div>

            <div className="item-page__category">
              <span>{`product type: ${details.product_type}`}</span>
            </div>

            <div className="item-page__tags">
              {
                details.tag_list.length > 0 ?
                  (
                    <>
                      {details.tag_list.map(item => (
                        <Button className="item-page__tag">
                          {item}
                        </Button>
                      ))}
                    </>
                  ) : (
                    null
                  )
              }

            </div>

            <div className="item-page__colors">
              {
                details.product_colors.length > 0 ?
                  (
                    <>
                      {details.product_colors.map((colour) => (
                        <div
                          style={{
                            backgroundColor: `${colour.hex_value}`,
                          }}
                          title={colour.colour_name}
                          className="item-page__color"
                        >
                        </div>
                      ))}
                    </>
                  ) : (
                    null
                  )
              }
            </div>

            <div className="item-page__description">
              <p>{details.description}</p>
            </div>

            <div className="item-page__price">
              <Button>
                {`$ ${details.price}`}
              </Button>
            </div>

          </div>
        </div >
      )
      }
    </>
  )
}