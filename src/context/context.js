import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchValue = (value) => {
        setSearchValue(value)
    }

    const toggleSearchVisibility = () => {
        setIsSearchVisible((prev) => !prev)
    };

    return (
        <SearchContext.Provider value={{
            isSearchVisible,
            toggleSearchVisibility,
            handleSearchValue,
            searchValue
        }}>
            {children}
        </SearchContext.Provider>
    );
};