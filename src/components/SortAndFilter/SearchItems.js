import React, { useState, useEffect } from "react";
import { fetchProductsList } from "../../services/GET";

export default function SearchItems(props) {
  //   const [brand, setBrand] = useState("");
  const [details, setDetails] = useState([]);

  const { type } = props;

  useEffect(() => {
    fetchProductsList(type).then((response) => {
      setDetails(response);
      console.log("DATA:", response);
    });
  }, [type]);

  return;
}
