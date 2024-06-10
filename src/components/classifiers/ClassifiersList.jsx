import React from "react";
import types from "../../data/types.json";
import brands from "../../data/brands.json";
import ClassifierItem from "./ClassifiersItem";

export default function ClassifiersList({ isTypes }) {
  let classifierList;
  if (isTypes) {
    classifierList = (
      <div className="product-types">
        {types.map((type) => (
          <ClassifierItem key={type.id} {...type} isTypes={isTypes} className="product-type" />
        ))}
      </div>
    );
  } else {
    classifierList = (
      <div className="product-brands">
        {brands.map((brand) => (
          <ClassifierItem key={brand.id} {...brand} isTypes={isTypes} className="product-brand" />
        ))}
      </div>
    );
  }
  return <div>{classifierList}</div>;
}
