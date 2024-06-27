import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Magnifier, Bars, Xmark } from '@gravity-ui/icons';
import { Button, TextInput } from '@gravity-ui/uikit';
import { useSearchContext } from '../context/context'
import ProductsPage from "../pages/ProductsPage";
import useSearch from "../hooks/useSearch";

export default function Header() {
  const { isSearchVisible, toggleSearchVisibility, handleSearchValue, searchValue } = useSearchContext()
  const { searchedDetails, searchProducts } = useSearch()
  const [burgerOpen, setBurgerOpen] = useState()

  return (
    <>
      <div className="page-container">
        <div className="header">
          <NavLink to={"/"} className="header__logo">
            <picture>
              <source media="(max-width: 576px)" srcSet='./assets/logo_lipstick.png' />
              <source media="(max-width: 992px)" srcSet='./assets/logo_icon.png' />
              <img src='./assets/logo.png' alt="logo" />
            </picture>
          </NavLink>
          <div className={`header__nav ${burgerOpen ? "header__nav_active" : ""}`}>
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
                  </>
                )
              }
              <NavLink to={"/contact"} className="header__link">
                Contact
              </NavLink>
              <Xmark className="header__close" onClick={() => setBurgerOpen(!burgerOpen)} />
            </div>
          </div>
          {
            isSearchVisible ? <div className="header search-form">
              <TextInput
                className="validate"
                placeholder="search by name"
                type="search"
                value={searchValue}
                onChange={(e) => handleSearchValue(e.target.value)}
              />
              <Button className="header search-form__button" onClick={searchProducts} >Go</Button>
            </div> : null
          }
          <div className="header__icons">
            <Magnifier className="header search-form__icon" onClick={toggleSearchVisibility} size='xl' />
            <Bars className="header burger-icon" onClick={() => setBurgerOpen(!burgerOpen)} size='xl' />
          </div>
          {burgerOpen && <div className="header__overlay" onClick={() => setBurgerOpen(false)}></div>}
        </div>
      </div >
      {/* {searchValue ? <ProductsPage searchedDetails={searchedDetails} searchValue={searchValue} /> : null} */}
    </>
  );
}