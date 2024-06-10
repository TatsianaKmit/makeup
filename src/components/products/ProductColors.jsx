import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsItem } from "../../services/GET";

export default function ProductColors() {
  const [colours, setColours] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProductsItem(id).then((response) => {
      setColours(response.product_colors);
    });
  }, [id]);

  return (
    <div className="products-list__colors">
      {colours.map((colour) => (
        <div
          style={{
            backgroundColor: `${colour.hex_value}`,
            borderRadius: '50%',
            cursor: 'pointer',
            width: '25px',
            height: '25px',
            margin: '3px',
          }}
          title={colour.colour_name}
          className="products-list__color"
        >
        </div>
      ))}
    </div>
  );
} 