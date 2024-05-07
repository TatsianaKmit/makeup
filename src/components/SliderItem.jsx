import React from 'react'
import data from '../data/tags.json'
import { Link } from 'react-router-dom'

export const SliderItem = (props) => {

    const { tag, img } = props
    let path = `products?filter=product_tags&tag=${tag}`

    return (
        <div className="card #fce4ec pink lighten-5">
            <div className="card-action ">
                <div className="card-image">
                    <img src={img} alt={tag} />
                </div>
                <div className="card-content">
                    <span className="card-title">{tag}</span>
                </div>
                <Link to={`/${path}`} className="btn #ad1457 pink darken-3">
                    Products
                </Link>
            </div>
        </div>

    )
}

