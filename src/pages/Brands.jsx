import React, { useState } from "react";
import ClassifiersList from "../components/classifiers/classifiers.list";

export default function Brands() {
  const [isTypes, setIsTypes] = useState(false);

  return (
    <>
      <h1>BRANDS</h1>
      <ClassifiersList isTypes={isTypes} />
    </>
  );
}
