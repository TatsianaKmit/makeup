import React, { useState, useEffect } from 'react';
import { fetchProductsList } from '../services/GET';
import { useSearchContext } from '../context/context';
import { useNavigate, useLocation } from 'react-router-dom';

function useSearch() {
    const { details, searchValue } = useSearchContext()
    const [searchedDetails, setSearchedDetails] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     fetchProductsList({ filter: 'search' })
    //         .then((response) => {
    //             setLoading(false);
    //             setDetails(response);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             setLoading(false);
    //         });
    // }, [searchValue])

    const searchData = details.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    const searchProducts = () => {
        // navigate(`/products?filter=search&name=${searchValue}`);
        setSearchedDetails(searchData);
    }

    return { searchedDetails, searchProducts }
}

export default useSearch;
