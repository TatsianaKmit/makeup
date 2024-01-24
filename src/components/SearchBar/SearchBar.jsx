import React, { useState, useEffect } from "react";
import { fetchProductsList } from "../../services/GET";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   fetchProductsList(search).then((response) => {
  //     setDetails(response);
  //     console.log("DATA:", response);
  //   });
  // }, [search]);

  const searchItems = (str) => {};

  const handleKey = (event) => {
    if (event.key === "enter") {
      searchItems(search);
    }
  };

  return <div>SearchBar</div>;
}
