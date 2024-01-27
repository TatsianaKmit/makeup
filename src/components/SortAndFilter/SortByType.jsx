import React, { useState } from "react";
import data from "../../data/types.json";

export default function SortByType({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {data.map((type, index) => (
              <div
                key={type.id}
                onClick={(e) => {
                  setSelected(type, index);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {type.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
