import React from "react";
import { Link } from "react-router-dom";

export default function Brand(props) {
  const { brand_name } = props;

  return (
    <div>
      <Link to={`/brands/${brand_name}`}>
        <div className="card #fce4ec pink lighten-5">
          <div className="card-content black-text">
            <span className="card-title">{brand_name}</span>
          </div>
          {/* <div className="card-action">
              <p>Link?</p>
            </div> */}
        </div>
      </Link>
    </div>
  );
}
