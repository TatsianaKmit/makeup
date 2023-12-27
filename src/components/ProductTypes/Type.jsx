import React from "react";
import { Link} from "react-router-dom";

export default function Type(props) {
  const { name, img } = props;

  return (
    <div className="card #fce4ec pink lighten-5">
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
      </div>
      <div className="card-action ">
        <Link to={`/catalog/${name} `} className='btn #ad1457 pink darken-3'>
           Products
        </Link>
      </div>
    </div>
  );
}
