import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsItem } from "../../../services/GET";

export default function ProductColorsList() {
  const [colours, setColours] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProductsItem(id).then((response) => {
      setColours(response.product_colors);
      console.log("colors", response.product_colors);
    });
  }, [id]);

  return (
    <div>
      {colours.map((colour) => (
        <span>{colour.colour_name}</span>
      ))}
    </div>
  );
}
