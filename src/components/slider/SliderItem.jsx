import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@gravity-ui/uikit'
import { Card } from '@gravity-ui/uikit'

export const SliderItem = (props) => {

    const { tag_name, img } = props
    let path = `products?filter=product_tags&tag=${tag_name}`

    const style = {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    return (

        <Card style={style} view="clear" type="container" size="l" className="slider-tags__card">
            <Link to={`/${path}`}>
                <div className='slider-tags__title'>{tag_name}</div>
                <div className="slider-tags__photo">
                    <img src={img} alt={tag_name} />
                </div>
            </Link>
        </Card>
    )
}

