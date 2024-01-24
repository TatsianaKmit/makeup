import React, { useState, useEffect } from "react";

import Brand from "./Brand";
import data from "../../data/brands.json";

export default function BrandsList({ brand }) {
  return (
    <>
      <div className="brands-list">
        <div className="product-types">
          {data.map((brand) => (
            <Brand key={brand.id} {...brand} />
          ))}
        </div>
      </div>
    </>
  );
}
