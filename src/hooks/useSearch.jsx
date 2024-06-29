import React, { useState, useEffect } from 'react';
import { fetchProductsList } from '../services/GET';
import { useSearchContext } from '../context/context';
import { useNavigate, useLocation } from 'react-router-dom';

function useSearch() {
    const { searchValue } = useSearchContext()
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchedDetails, setSearchedDetails] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(searchValue);

    useEffect(() => {
        fetchProductsList({ filter: 'search' })
            .then((response) => {
                setLoading(false);
                setDetails(response);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [searchValue])

    console.log('details', details);
    console.log('searchedDetails', searchedDetails);
    console.log('location.pathname', location.pathname);

    const searchProducts = () => {
        // navigate(`/products?filter=search&name=${searchValue}`);
        const searchData = details.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchedDetails(searchData);
    }

    return { searchedDetails, searchProducts }
}

export default useSearch;
