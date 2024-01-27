import React, { useState } from "react";
import types from "../../data/types.json";
import brands from "../../data/brands.json";
import ClassifierItem from "./classifier.item";

export default function ClassifiersList({ isTypes }) {
  let classifierList;
  if (isTypes) {
    classifierList = (
      <div className="product-types">
        {types.map((type) => (
          <ClassifierItem key={type.id} {...type} isTypes={isTypes} />
        ))}
      </div>
    );
  } else {
    classifierList = (
      <div className="product-types">
        {brands.map((brand) => (
          <ClassifierItem key={brand.id} {...brand} isTypes={isTypes} />
        ))}
      </div>
    );
  }

  return <div>{classifierList}</div>;
}
