import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SortByDropdown = ({ provinceList, handleClickForDist }) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      {provinceList?.length > 0 &&
        provinceList?.map((item, index) => (
          <div className="dropdown_box" key={index}>
            <div
              className="dropdown_sortby"
              onClick={(e) => handleClickForDist(e, item.id, 'province')}
            >
              {item?.title}
            </div>
            <ul className="dropdown_items">
              {item?.districts?.length > 0 &&
                item?.districts?.map((dist) => (
                  <li className="dropdown_item" key={dist?.id}>
                    <Button
                      onClick={(e) =>
                        handleClickForDist(e, dist.id, 'district')
                      }
                    >
                      {dist.title}
                    </Button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default SortByDropdown;
