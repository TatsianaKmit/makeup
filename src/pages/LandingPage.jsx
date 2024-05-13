import React from "react";
import MultipleItems from "../components/SliderComponent";



export default function LandingPage() {

  return (
    <>
      <div className="landing_page">
        <div className="landing_picture"> {/* has a backgound image */}
          <div className="landing-text">
            <h2>Discover the Beauty of Makeup Products</h2>
            <h4>Elevate Your Look with Our Premium Makeup Collection</h4>
            <div className="landing-buttons">
              <div className="landing-button">
                Featured Products
              </div>
              <div className="landing-button">
                Shop by Category
              </div>
            </div>
          </div>
        </div>
      </div >
      <MultipleItems />
    </>
  );
}
