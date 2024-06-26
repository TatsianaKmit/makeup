import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@gravity-ui/uikit";
import { Card } from "@gravity-ui/uikit";

export default function ClassifierItem(props) {
  const { name, img, brand_name, isTypes } = props;

  const path = isTypes ? `products?filter=catalog&category=${name}` : `products?filter=brands&brand=${brand_name}`;

  let classifierItem;

  const style = {
    width: '230px',
    height: '230px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  if (isTypes) {
    classifierItem = (
      <Card style={style} view="filed" type="container" size="l" className="catalog-page__card">
        <Link to={`/${path}`}>
          <div className="catalog-page__photo">
            <img src={img} alt={name} />
          </div>
          <div className="catalog-page__title">{name}</div>
        </Link>
      </Card>
    );
  } else {
    classifierItem = (
      <div >
        <Link to={`/${path}`} >
          <Button view="normal" size="l" className="brands-page__button">
            {brand_name}
          </Button>
        </Link>
      </div>
    )
  }

  return <div>{classifierItem}</div>;
}
