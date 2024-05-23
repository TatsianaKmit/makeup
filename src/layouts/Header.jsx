import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/header.scss";
import { Magnifier } from '@gravity-ui/icons';
import { Button, TextInput } from '@gravity-ui/uikit';
import { useSearchContext } from '../context/context'
import { fetchProductsList } from '../services/GET'
import ProductsPage from "../pages/ProductsPage";

export default function Header() {

  const [searchValue, setSearchValue] = useState("");
  const { isSearchVisible, toggleSearchVisibility } = useSearchContext()
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsList({ filter: searchValue })
      .then((response) => {
        setLoading(false);
        setDetails(response);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    console.log(details);
  }, [searchValue])

  const searchProducts = (details) => {
    const searchedDetails = details.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return searchedDetails
  }

  const handleSearch = () => {
    searchProducts(details);
  }

  return (
    <>
      <div className="header">
        <NavLink to={"/"}>
          <img src="assets/logo.png" alt="logo" className="header-logo" />
        </NavLink>
        <NavLink to={"/"} className="header-link">
          Home
        </NavLink>
        <NavLink to={"/"} className="header-link">
          About
        </NavLink>
        {
          !isSearchVisible && (
            <>
              <NavLink to={"/catalog"} className="header-link">
                Products
              </NavLink>
              <NavLink to={"/brands"} className="header-link">
                Brands
              </NavLink>
              <NavLink to={"/"} className="header-link">
                Contact
              </NavLink>
            </>
          )
        }
        {
          isSearchVisible ? <div className="search-field">
            <TextInput
              className="validate"
              placeholder="search by name"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button className="btn search-btn" onClick={handleSearch} >Go</Button>
          </div> : null
        }
        <Magnifier className="header-search" onClick={toggleSearchVisibility} size='xl' />
      </div>
      {searchValue ? <ProductsPage details={details} searchValue={searchValue} handleSearch={handleSearch} searchProducts={searchProducts} /> : null}
    </>
  );
}
