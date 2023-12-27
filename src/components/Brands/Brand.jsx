import React from "react";
import { Link } from "react-router-dom";

export default function Brand(props) {
  const { brand_name } = props;

  return (
    <div>
      <Link to={`/brands/${brand_name}`}>
        <p>{brand_name}</p>
      </Link>
    </div>
  );
}
