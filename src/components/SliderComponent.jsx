import React from "react";
import Slider from "react-slick";
import data from '../data/tags.json'
import { SliderItem } from "./SliderItem";

function Fade() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((item) => (
                    <SliderItem key={item.id} {...item} />
                ))}
            </Slider>
        </div>
    );
}

export default Fade;