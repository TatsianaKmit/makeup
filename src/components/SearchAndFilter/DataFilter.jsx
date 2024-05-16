import React, { useState } from "react";
import types from "../../data/types.json";
import brands from '../../data/brands.json'
import tags from '../../data/tags.json'
import { Select } from '@gravity-ui/uikit';
// import { useFilter } from '../../hooks/useFilter'
import { useEffect } from "react";

export default function DataFilter(props) {
    const { filterUrl, category, brand, tag, filterProducts } = props
    const [selectedValues, setSelectedValues] = useState({
        category: '',
        brand: '',
        tag: '',
    });

    const handleSelectChange = (name, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        filterProducts(selectedValues);
    };



    // const [selectedCategory, setSelectedCategory] = useState('')
    // const [selectedBrand, setSelectedBrand] = useState('')
    // const [selectedTag, setSelectedTag] = useState('')



    // const handleCategoryFilter = (categoryValue) => {
    //     setSelectedCategory(categoryValue);
    //     filterProducts(categoryValue);
    // }

    // const handleBrandFilter = (brandValue) => {
    //     setSelectedBrand(brandValue);
    //     filterProducts(brandValue);
    // }

    // const handleTagFilter = (tagValue) => {
    //     setSelectedTag(tagValue);
    //     filterProducts(tagValue);
    // }

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
                                value={selectedValues.category}
                                onUpdate={(value) => handleSelectChange("category", value)}
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
                                value={selectedValues.tag}
                                onUpdate={(value) => handleSelectChange("tag", value)}
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
                                value={selectedValues.brand}
                                onUpdate={(value) => handleSelectChange("brand", value)}
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
                                value={selectedValues.tag}
                                onUpdate={(value) => handleSelectChange("tag", value)}
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
                                value={selectedValues.brand}
                                onUpdate={(value) => handleSelectChange("brand", value)}
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
                                value={selectedValues.category}
                                onUpdate={(value) => handleSelectChange("category", value)}
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
        </>
    )
}
