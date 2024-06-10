import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@gravity-ui/uikit";
import { Card } from "@gravity-ui/uikit";

export default function ClassifierItem(props) {
  const { name, img, brand_name, isTypes } = props;

  const path = isTypes ? `products?filter=catalog&category=${name}` : `products?filter=brands&brand=${brand_name}`;

  let classifierItem;

  const style = {
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  if (isTypes) {
    classifierItem = (
      <Card style={style} view="filed" type="container" size="l">
        <div className="product-types__photo">
          <img src={img} alt={name} />
        </div>
        <Button view="flat-contrast" size="l">
          <Link to={`/${path}`}>
            {name}
          </Link>
        </Button>
      </Card>
    );
  } else {
    classifierItem = (
      <div >
        <Button view="normal" size="l" className="product-brands__button">
          <Link to={`/${path}`} >
            {brand_name}
          </Link>
        </Button>
      </div>
    );
  }

  return <div>{classifierItem}</div>;
}
