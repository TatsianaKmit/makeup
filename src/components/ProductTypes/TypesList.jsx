import React from "react";
import data from "../../data/types.json";
import Type from "./Type";

export default function TypesList({ type }) {
  return (
    <div className="product-types">
      {data.map((type) => (
        <Type key={type.id} {...type} />
      ))}
    </div>
  );
}
