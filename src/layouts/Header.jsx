import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to={"/"} className="header__logo">
          <img src="assets/logo.png" alt="logo" />
        </NavLink>
        <div className="header__links">
          <NavLink to={"/"} className="header__link">
            Home
          </NavLink>
          <NavLink to={"/about"} className="header__link">
            About
          </NavLink>
          {
            !isSearchVisible && (
              <>
                <NavLink to={"/catalog"} className="header__link">
                  Products
                </NavLink>
                <NavLink to={"/brands"} className="header__link">
                  Brands
                </NavLink>
                <NavLink to={"/contact"} className="header__link">
                  Contact
                </NavLink>
              </>
            )
          }
        </div>
        {
          isSearchVisible ? <div className="header search-form">
            <TextInput
              className="validate"
              placeholder="search by name"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button className="header search-form__button" onClick={handleSearch} >Go</Button>
          </div> : null
        }
        <Magnifier className="header search-form__icon" onClick={toggleSearchVisibility} size='xl' />
      </div>
      {searchValue ? <ProductsPage details={details} searchValue={searchValue} handleSearch={handleSearch} searchProducts={searchProducts} /> : null}
    </>
  );
}