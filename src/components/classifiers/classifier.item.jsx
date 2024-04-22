import React from "react";
import { Link } from "react-router-dom";

export default function ClassifierItem(props) {
  const { name, img, brand_name, isTypes } = props;

  let path = isTypes ? `products?filter=categories&category=${name}` : `products?filter=brands&brand=${brand_name}`;

  let classifierItem;
  if (isTypes) {
    classifierItem = (
      <div className="card #fce4ec pink lighten-5">
        <div className="card-image">
          <img src={img} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
        </div>
        <div className="card-action ">
          <Link to={`/${path}`} className="btn #ad1457 pink darken-3">
            Products
          </Link>
        </div>
      </div>
    );
  } else {
    classifierItem = (
      <div>
        <Link to={`/${path}`}>
          <div className="card #fce4ec pink lighten-5">
            <div className="card-content black-text">
              <span className="card-title">{brand_name}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return <div>{classifierItem}</div>;
}
