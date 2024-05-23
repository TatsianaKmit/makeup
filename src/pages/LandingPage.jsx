import React from "react";
import MultipleItems from "../components/slider/SliderComponent";
import { Link } from "react-router-dom";
import '../style/LandingPage.scss'

export default function LandingPage() {

  return (
    <>
      <div className="landing_page">
        <div className="landing_picture"> {/* has a background image */}
          <div className="landing-text_container">
            <div className="landing-text">
              <h2>Discover the Beauty <p class="line-break">of Makeup Products</p></h2>
              <h4>Elevate Your Look with Our Premium Makeup Collection</h4>
            </div>
            <div className="landing-buttons">
              <div className="landing-button">
                <Link to={"/brands"}>
                  Featured Products
                </Link>

              </div>
              <div className="landing-button">
                <Link to={"/catalog"}>
                  Shop by Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="slider_container">
        <MultipleItems />
      </div>
      <div className="landing-tags_picture">
        <div className="landing-tags_container">
          <div className="landing-tags_left">
            <h2>Explore Our Makeup Essentials</h2>
            <p>Discover Your Signature Look with Our Expansive Makeup Collection. From bold lipsticks to flawless foundations, we have everything you need to elevate your beauty game</p>
            <div className="landing-button">
              <Link to={"/"}>
                Shop Now
              </Link>
            </div>
          </div>
          <div className="landing-tags_right">
            <img src='assets/landing2.jpg' />
          </div>
        </div>

      </div>
    </>
  );
}
