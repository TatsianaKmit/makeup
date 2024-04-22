import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import data from "../../data/types.json";
import {Select} from '@gravity-ui/uikit';

export default function SortByType() {
  const [selected, setSelected] = useState('');

  const handleSelectChange = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    console.log('onUpdate value', selected);
  }, [selected]);

  
  return (
    <>
      <Select 
        filterable={true}  
        multiple={false} 
        width={150} 
        placeholder="Category" 
        onUpdate={(value)=>handleSelectChange(value)}
      >
        {
          data.map(category => (
            <Select.Option key={category.id} value={category.name}>{category.name}</Select.Option>
          ))
        }
      </Select>     
    </>
  );
}

      // <div className={`dropdown ${isActive ? 'active' : ''} `}>
   
      //   <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
      //     {selected}
      //     <span className="fas fa-caret-down"></span>
      //   </div>
      //   {isActive && (
      //     <div className="dropdown-content">
      //       {data.map((type, index) => (
      //         <div
      //           key={type.id}
      //           onClick={(e) => {
      //             setSelected(type, index);
      //             setIsActive(false);
      //           }}
      //           className="dropdown-item"
      //         >
      //           {type.name}
      //         </div>
      //       ))}
      //     </div>
      //   )}
      // </div>
    
      // <Select width={120} placeholder="Задолженность" />
      // <Select width={120} value={selectedGroup}
      //   onUpdate={(nextValue) => setSelectedGroup(nextValue)}
      // >
      //   {groups.map(group => {
      //     return (
      //       <Select.Option key={group} value={group}>{group}</Select.Option>
      //     )
      //   })}
      // </Select>
      // <Select width={120} placeholder="Посещаемость 30д." />
      // <Select width={120} placeholder="Платеж" />