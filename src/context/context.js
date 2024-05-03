import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchVisibility = () => {
        setIsSearchVisible((prev) => !prev)
    };

    return (
        <SearchContext.Provider value={{
            isSearchVisible,
            toggleSearchVisibility,
        }}>
            {children}
        </SearchContext.Provider>
    );
};