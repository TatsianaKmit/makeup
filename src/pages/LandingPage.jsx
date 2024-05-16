import React from "react";
import MultipleItems from "../components/slider/SliderComponent";
import { Link } from "react-router-dom";
import '../style/LandingPage.scss'

export default function LandingPage() {

  return (
    <>
      <div className="landing_page">
        <div className="landing_picture"> {/* has a background image */}
          <div className="landing-text">
            <h2>Discover the Beauty of Makeup Products</h2>
            <h4>Elevate Your Look with Our Premium Makeup Collection</h4>
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
      <MultipleItems />
    </>
  );
}
