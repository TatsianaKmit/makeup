import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@gravity-ui/uikit";
import { Card } from "@gravity-ui/uikit";

export default function ClassifierItem(props) {
  const { name, img, brand_name, isTypes } = props;

  let path = isTypes ? `products?filter=catalog&category=${name}` : `products?filter=brands&brand=${brand_name}`;

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
        <div className="card-image">
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
      <div>
        <Link to={`/${path}`}>
          <Button view="normal" size="l" >
            {brand_name}
          </Button>
        </Link>
      </div>
    );
  }

  return <div>{classifierItem}</div>;
}


{/* <Link to={`/${path}`}>
<div className="card #fce4ec pink lighten-5">
  <div className="card-content black-text">
    <span className="card-title">{brand_name}</span>
  </div>
</div>
</Link> */}