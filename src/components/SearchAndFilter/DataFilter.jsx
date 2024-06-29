import React, { useState } from "react";
import types from "../../data/types.json";
import brands from '../../data/brands.json'
import tags from '../../data/tags.json'
import { Select } from '@gravity-ui/uikit';
import { useEffect } from "react";
import ProductsList from "../products/ProductsList";
import { Spin } from "@gravity-ui/uikit";
import useSearch from "../../hooks/useSearch";

export default function DataFilter(props) {
    const { filterUrl, details, loading, pageState, searchedDetails } = props
    const [selectBrand, setSelectBrand] = useState([])
    const [selectTag, setSelectTag] = useState([])
    const [selectCategory, setSelectCategory] = useState([])
    const [detailsState, setDetailsState] = useState([])
    const [filterArrayState, setFilterArrayState] = useState([])

    console.log('PageState DataFilter', pageState);

    if (JSON.stringify(detailsState) !== JSON.stringify(pageState)) {
        setDetailsState(pageState)
    }

    useEffect(() => {
        if (filterUrl == 'catalog' && detailsState && detailsState.length > 0) {
            const filterArrayBoth = detailsState.filter(item => item.brand === selectBrand[0] && item.tag_list.includes(selectTag[0]))
            const filterArrayBrand = detailsState.filter(item => item.brand === selectBrand[0])
            const filterArrayTag = detailsState.filter(item => item.tag_list.includes(selectTag[0]))
            const filteredArray = selectBrand.length > 0 && selectTag.length > 0 ? filterArrayBoth : selectBrand.length > 0 && selectTag.length === 0 ? filterArrayBrand : filterArrayTag
            setFilterArrayState(filteredArray)
        } else if (filterUrl == 'brands' && detailsState && detailsState.length > 0) {
            const filterArrayBoth = detailsState.filter(item => item.product_type === selectCategory[0] && item.tag_list.includes(selectTag[0]))
            const filterArrayCategory = detailsState.filter(item => item.product_type === selectCategory[0])
            const filterArrayTag = detailsState.filter(item => item.tag_list.includes(selectTag[0]))
            const filteredArray = selectCategory.length > 0 && selectTag.length > 0 ? filterArrayBoth : selectCategory.length > 0 && selectTag.length === 0 ? filterArrayCategory : filterArrayTag
            setFilterArrayState(filteredArray)
        } else if (filterUrl == 'product_tags' && detailsState && detailsState.length > 0) {
            const filterArrayBoth = detailsState.filter(item => item.brand === selectBrand[0] && item.product_type === selectCategory[0])
            const filterArrayBrand = detailsState.filter(item => item.brand === selectBrand[0])
            const filterArrayCategory = detailsState.filter(item => item.product_type === selectCategory[0])
            const filteredArray = selectBrand.length > 0 && selectCategory.length > 0 ? filterArrayBoth : selectBrand.length > 0 && selectCategory.length === 0 ? filterArrayBrand : filterArrayCategory
            setFilterArrayState(filteredArray)
        }

    }, [filterUrl, selectBrand, selectTag, selectCategory, detailsState])

    return (
        <>
            <div className="page-container">
                <div className="products-page__filter">
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
                {loading ? <Spin className='spin' /> :
                    <ProductsList
                        details={selectTag.length > 0 || selectBrand.length > 0 || selectCategory.length > 0 ? filterArrayState : pageState} className="products-list" />}



                {/* {loading ? <Spin className='spin' /> :
                    <ProductsList
                        details={pageState} className="products-list" />} */}






                {/* {loading ? <Spin className='spin' /> : <ProductsList details={(selectTag.length > 0 || selectBrand.length > 0 || selectCategory.length > 0) ? filterArrayState : (searchedDetails.length > 0) ? searchedDetails : details} className="products-list" />} */}

            </div>

        </>
    )
}
