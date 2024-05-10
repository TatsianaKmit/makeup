import React from 'react'
import data from '../data/tags.json'
import { Link } from 'react-router-dom'

export const SliderItem = (props) => {

    const { tag_name, img } = props
    let path = `products?filter=product_tags&tag=${tag_name}`

    return (
        <div className="card #fce4ec pink lighten-5">
            <div className="card-action ">
                <div className="card-image">
                    <img src={img} alt={tag_name} />
                </div>
                <div className="card-content">
                    <span className="card-title">{tag_name}</span>
                </div>
                <Link to={`/${path}`} className="btn #ad1457 pink darken-3">
                    Products
                </Link>
            </div>
        </div>

    )
}

