import React, { useState } from "react";
import types from "../../data/types.json";
import brands from '../../data/brands.json'
import tags from '../../data/tags.json'
import { Select } from '@gravity-ui/uikit';
import { useSearchContext } from "../../context/context";

export default function DataFilter(props) {
    const { searchProducts = Function.prototype, filterType } = props
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedTag, setSelectedTag] = useState('')
    const [searchValue, setSearchValue] = useState("");
    const { isSearchVisible, toggleSearchVisibility } = useSearchContext()

    const handleCategoryFilter = (categoryValue) => {
        setSelectedCategory(categoryValue);
        searchProducts(categoryValue, selectedBrand, selectedTag, searchValue);
    }

    const handleBrandFilter = (brandValue) => {
        setSelectedBrand(brandValue);
        searchProducts(selectedCategory, brandValue, selectedTag, searchValue);
    }

    const handleTagFilter = (tagValue) => {
        setSelectedTag(tagValue);
        searchProducts(selectedCategory, selectedBrand, tagValue, searchValue);
    }

    const handleSearch = () => {
        searchProducts(selectedCategory, selectedBrand, selectedTag, searchValue);
    }


    return (
        <>
            <div className="filter-and-search">
                <div className="filter">
                    {filterType === "catalog" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Category"
                                onUpdate={(categoryValue) => handleCategoryFilter(categoryValue)}
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
                                onUpdate={(tagValue) => handleTagFilter(tagValue)}
                            >
                                {
                                    tags.map(tag => (
                                        <Select.Option key={tag.id} value={tag.tag_name}>{tag.tag_name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </>

                    }

                    {filterType === "brands" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Brand"
                                onUpdate={(brandValue) => handleBrandFilter(brandValue)}
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
                                onUpdate={(tagValue) => handleTagFilter(tagValue)}
                            >
                                {
                                    tags.map(tag => (
                                        <Select.Option key={tag.id} value={tag.tag_name}>{tag.tag_name}</Select.Option>
                                    ))
                                }
                            </Select>

                        </>

                    }

                    {filterType === "product_tags" &&
                        <>
                            <Select
                                filterable={true}
                                multiple={false}
                                width={150}
                                placeholder="Brand"
                                onUpdate={(brandValue) => handleBrandFilter(brandValue)}
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
                                onUpdate={(categoryValue) => handleCategoryFilter(categoryValue)}
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
                {
                    isSearchVisible ? <div className="search-field">
                        <input
                            className="validate"
                            placeholder="search brand or category"
                            type="search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className="btn search-btn" onClick={handleSearch}>
                            Search
                        </button>
                    </div> : null
                }
                <img src="assets/search.png" alt="search" className="header-search" onClick={toggleSearchVisibility} />
            </div>
        </>
    )
}

