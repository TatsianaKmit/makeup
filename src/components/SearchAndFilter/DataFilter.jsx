import React, { useState } from "react";
import types from "../../data/types.json";
import brands from '../../data/brands.json'
import tags from '../../data/tags.json'
import { Select } from '@gravity-ui/uikit';
import { useEffect } from "react";
import ProductsList from "../products/ProductsList";
import { Spin } from "@gravity-ui/uikit";

export default function DataFilter(props) {
    const { filterUrl, category, brand, tag, details, loading } = props
    const [selectedValues, setSelectedValues] = useState({
        category: '',
        brand: '',
        tag: '',
    });


    const [selectBrand, setSelectBrand] = useState([])
    const [selectTag, setSelectTag] = useState([])
    const [selectCategory, setSelectCategory] = useState([])

    const [filterArrayState, setFilterArrayState] = useState([])

    function filterProductsFunc(array, selectedValues, type) {

        const filterArray = array.filter((item) => {
            if (Array.isArray(item[type])) {
                return item.tag_list.includes(selectedValues[0])
            } else {
                return item[type] === selectedValues[0]
            }

        });
        return filterArray;
    }

    console.log(filterArrayState)

    useEffect(() => {
        setFilterArrayState(filterProductsFunc(details, selectBrand, "brand"))
        if (selectTag.length > 0) {
            setFilterArrayState(filterProductsFunc(filterArrayState, selectTag, "tag_list"))
        }
    }, [selectBrand, selectTag])


    const handleSelectChange = (name, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        // filterProducts(selectedValues);
    };

    return (
        <>
            <div className="filter-and-search">
                <div className="filter">
                    {filterUrl === "brands" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Category"
                                value={selectCategory}
                                onUpdate={(value) => setSelectCategory(value)}
                            >
                                {
                                    types.map(category => (
                                        <Select.Option key={category.id} value={category.name}>{category.name}</Select.Option>
                                    ))
                                }
                            </Select>

                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Tags"
                                value={selectTag}
                                onUpdate={(value) => setSelectTag(value)}
                            >
                                {
                                    tags.map(tag => (
                                        <Select.Option key={tag.id} value={tag.tag_name}>{tag.tag_name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </>

                    }

                    {filterUrl === "catalog" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Brand"
                                value={selectBrand}
                                onUpdate={(value) => setSelectBrand(value)}
                            >
                                {
                                    brands.map(brand => (
                                        <Select.Option key={brand.id} value={brand.brand_name}>{brand.brand_name}</Select.Option>
                                    ))
                                }
                            </Select>

                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Tags"
                                value={selectTag}
                                onUpdate={(value) => setSelectTag(value)}
                            >
                                {
                                    tags.map(tag => (
                                        <Select.Option key={tag.id} value={tag.tag_name}>{tag.tag_name}</Select.Option>
                                    ))
                                }
                            </Select>

                        </>

                    }

                    {filterUrl === "product_tags" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Brand"
                                value={selectBrand}
                                onUpdate={(value) => setSelectBrand(value)}
                            >
                                {
                                    brands.map(brand => (
                                        <Select.Option key={brand.id} value={brand.brand_name}>{brand.brand_name}</Select.Option>
                                    ))
                                }
                            </Select>

                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Category"
                                value={selectCategory}
                                onUpdate={(value) => setSelectCategory(value)}
                            >
                                {
                                    types.map(category => (
                                        <Select.Option key={category.id} value={category.name}>{category.name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </>
                    }
                </div>

            </div>
            {loading ? <Spin className='spin' /> : <ProductsList details={filterArrayState.length > 0 ? filterArrayState : details} />}
        </>
    )
}
