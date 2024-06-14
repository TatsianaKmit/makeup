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

        <Card style={style} view="filed" type="container" size="l">
            <div className="slider-tags__photo">
                <img src={img} alt={tag_name} />
            </div>
            <Button view="flat-contrast" size="l">
                <Link to={`/${path}`}>
                    {tag_name}
                </Link>
            </Button>
        </Card>
    )
}

