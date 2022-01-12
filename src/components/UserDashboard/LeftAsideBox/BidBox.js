import React from 'react';
import { Link } from 'react-router-dom';

const BidBox = () => {
  return (
    <div className="Bid_box">
      <ul>
        <li className="Bid_box_title">
          <h6>Recent Bids</h6>
        </li>
        <li>
          <Link to="">
            Construction work of Ward Office Building (Ward- 1,3 and 4)
          </Link>
        </li>
        <li>
          <Link to="">
            Supply, Delivery, Installation, Testing, Commissioning...
          </Link>
        </li>
        <li>
          <Link to="">Tax/Revenue</Link>
        </li>
        <li>
          <Link to="">
            Construction work of Ward Office Building (Ward- 1,3 and 4)
          </Link>
        </li>
        <li>
          <Link to="">
            Supply Of Cleaners Manpower & Procurement Of Medicines...
          </Link>
        </li>
        <li>
          <Link to="">Tax/Revenue</Link>
        </li>
        <li>
          <Link to="">
            Construction work of Ward Office Building (Ward- 1,3 and 4)
          </Link>
        </li>
        <li>
          <Link to="">
            Supply Of Cleaners Manpower & Procurement Of Medicines...
          </Link>
        </li>
        <li className="Bid_box_see_more">
          <Link to="">See More</Link>
        </li>
      </ul>
    </div>
  );
};

export default BidBox;
