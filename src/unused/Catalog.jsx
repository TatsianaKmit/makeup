import React, { useState } from "react";
import ClassifiersList from "../components/classifiers/classifiers.list";

export default function Catalog() {
  const [isTypes, setIsTypes] = useState(true);

  return (
    <>
      <h1>CATALOG</h1>
      <ClassifiersList isTypes={isTypes} />
    </>
  );
}
