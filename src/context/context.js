import React, { useState, useEffect, createContext, useContext, } from "react";
import { fetchProductsList } from "../services/GET";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductsList()
            .then((response) => {
                setLoading(false);
                setDetails(response);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    console.log('context details', details);
    console.log('search value', searchValue);

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
            searchValue,
            details,
            loading
        }}>
            {children}
        </SearchContext.Provider>
    );
};