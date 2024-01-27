import React from "react";
import { useState, useEffect } from "react";
import data from "../../data/brands.json";

export default function SortByBrand({ selected, clickHandler }) {
  return (
    <>
      <div className="filter-brands #fce4ec pink lighten-5">
        {data.map((brand) => (
          <p key={brand.id}>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type={brand.brand_name}
                onChange={clickHandler}
                checked={selected === brand.brand_name}
              />
              <span>{brand.brand_name}</span>
            </label>
          </p>
        ))}
      </div>
    </>
  );
}
