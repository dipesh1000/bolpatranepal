import React from 'react';
import { Link } from 'react-router-dom';

const SortByDropdown = () => {
  return (
    <div className="dropdown_box">
      <div className="dropdown_sortby">name</div>
      <ul className="dropdown_items active">
        <li className="dropdown_item">
          <Link>Item Name</Link>
        </li>
        <li className="dropdown_item">
          <Link>Item Name</Link>
        </li>
      </ul>
    </div>
  );
};

export default SortByDropdown;
