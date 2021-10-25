import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from './DatePicker';
import FilterCheckBox from './FilterCheckBox';

const FilterAside = () => {
  return (
    <div className="AsideBox">
      <div className="filter_aside_box">
        <div className="filter_title">Filter</div>
        <div className="divider"></div>
        <div className="filter_input_area">
          <DatePicker />
        </div>
        <div className="divider"></div>
        <FilterCheckBox title="Procruments" />
        <div className="divider"></div>
        <FilterCheckBox title="Projects" />
        <div className="divider"></div>
        <FilterCheckBox title="Tendor Price" />
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default FilterAside;
