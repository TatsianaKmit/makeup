import React, { useState } from "react";
import types from "../../data/types.json";
import brands from '../../data/brands.json'
import { Select } from '@gravity-ui/uikit';

export default function DataFilter(props) {
    const { searchProducts = Function.prototype, filterType } = props
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedBrand, setSelectedBrand] = useState('')

    const handleCategoryFilter = (value) => {
        setSelectedCategory(value);
        searchProducts(value, selectedBrand)
    }

    const handleBrandFilter = (value) => {
        setSelectedBrand(value);
        searchProducts(selectedCategory, value)
    }

    return (
        <>
            {filterType === "catalog" &&
                <Select
                    filterable={true}
                    multiple={false}
                    width={150}
                    placeholder="Category"
                    onUpdate={(value) => handleCategoryFilter(value)}
                >
                    {
                        types.map(category => (
                            <Select.Option key={category.id} value={category.name}>{category.name}</Select.Option>
                        ))
                    }
                </Select>
            }

            {filterType === "brands" &&
                <Select
                    filterable={true}
                    multiple={false}
                    width={150}
                    placeholder="Brand"
                    onUpdate={(value) => handleBrandFilter(value)}
                >
                    {
                        brands.map(brand => (
                            <Select.Option key={brand.id} value={brand.brand_name}>{brand.brand_name}</Select.Option>
                        ))
                    }
                </Select>
            }
        </>
    )
}