import React from "react";
import types from "../../data/types.json";
import brands from "../../data/brands.json";
import ClassifierItem from "./ClassifiersItem";

export default function ClassifiersList({ isTypes }) {
  let classifierList;
  if (isTypes) {
    classifierList = (
      <div className="catalog-page__wrapper">
        {types.map((type) => (
          <ClassifierItem key={type.id} {...type} isTypes={isTypes} />
        ))}
      </div>
    );
  } else {
    classifierList = (
      <div className="brands-page__wrapper">
        {brands.map((brand) => (
          <ClassifierItem key={brand.id} {...brand} isTypes={isTypes} />
        ))}
      </div>
    );
  }
  return <div>{classifierList}</div>;
}
