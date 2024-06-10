import React from "react";
import MultipleItems from "../components/slider/SliderComponent";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <>
      <div className="landing-page">

        <div className="lipstick"> {/* has a background image */}
          <div className="lipstick__text-container">
            <div className="lipstick__text">
              <h2 className="title">Discover the Beauty <span className="line-break">of Makeup Products</span></h2>
              <h4 className="subtitle">Elevate Your Look with Our Premium Makeup Collection</h4>
            </div>
            <div className="lipstick__buttons">
              <div className="lipstick__button">
                <Link to={"/brands"}>
                  Featured Products
                </Link>
              </div>
              <div className="lipstick__button">
                <Link to={"/catalog"}>
                  Shop by Category
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-tags">
          <MultipleItems />
        </div>

        <div className="powder">
          <div className="powder__text-container">
            <div className="powder__text">
              <h2>Explore Our <span className="line-break">Makeup Essentials</span></h2>
              <p>Discover Your Signature Look with Our Expansive Makeup Collection. From bold lipsticks to flawless foundations, we have everything you need to elevate your beauty game</p>
              <div className="powder__button">
                <Link to={"/"}>
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="powder__photo">
              <img src='assets/landing2.jpg' />
            </div>
          </div>
        </div>

        <div className="slider-brands">
          <MultipleItems />
        </div>

        <div className="girl">
          <div className="girl__text-container">
            <div className="girl__photo">
              <img src='assets/landing3.jpg' />
            </div>
            <div className="girl__text">
              <h2>Unleash <span className="line-break">Your </span><span className="line-break">Radiance</span></h2>
              <p>Discover the Transformative Power of Our Makeup Collection.</p>
            </div>
          </div>
        </div>

        <div className="landing-page__separator">
        </div>

      </div>
    </>
  );
}
