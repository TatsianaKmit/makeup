import React, { useState } from "react";
import { fetchProductsList } from "../services/GET";

export const useFilter = (details) => {
    const [filteredDetails, setFilteredDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const filterProducts = (selectedCategory, selectedBrand, selectedTag, details) => {
        const newFilter = 'all'

        fetchProductsList({
            type: selectedCategory,
            brand: selectedBrand,
            tag: selectedTag,
            filter: newFilter,
        })
            .then((response) => {
                setLoading(false);
                const filteredData = response.filter(product => {
                    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
                    const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
                    const tagMatch = selectedTag ? product.tag === selectedTag : true;
                    return categoryMatch && brandMatch && tagMatch;
                });
                setFilteredDetails(filteredData);
                // console.log('selectedCategory: ', selectedCategory, 'selectedBrand: ', selectedBrand, 'selectedTag: ', selectedTag);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });

            console.log('UseFilter: ', details);
    };

    return { filteredDetails, loading, filterProducts };
};

        // const newFilter = 'all'
        // let fData = '';
        // let fData2 = '';

        // if (filterUrl == 'brands' && selectedCategory) {
        //     fData2 = details.filter(item => item.product_type == selectedCategory);
        // }
        // else if (filterUrl == 'brands' && selectedCategory && selectedTag) {
        //     f2 = filterdData.filter(item => item.tag_list.includes(selectedTag));
        // }
        // else if (filterUrl == 'brands' && selectedTag) {
        //     f
        // };

    



// return { filteredDetails, loading, filterProducts };

// const searchMatch = searchValue ? product.name.toLowerCase().includes(searchValue.toLowerCase()) : true;

// fetchProductsList({
//     type: selectedCategory,
//     brand: selectedBrand,
//     tag: selectedTag,
//     filter: newFilter,
// })
//     .then((response) => {
//         setLoading(false);
//         const filteredData = response.filter(product => {
//             const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
//             const brandMatch = selectedBrand ? product.brand === selectedBrand : true;
//             const tagMatch = selectedTag ? product.tag === selectedTag : true;
//             return categoryMatch && brandMatch && tagMatch;
//         });
//         setFilteredDetails(filteredData);
//         console.log('selectedCategory: ', selectedCategory, 'selectedBrand: ', selectedBrand, 'selectedTag: ', selectedTag);
//     })
//     .catch((err) => {
//         console.error(err);
//         setLoading(false);
//     });