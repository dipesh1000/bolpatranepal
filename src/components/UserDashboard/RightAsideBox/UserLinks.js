import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaKey, FaSave, FaSignOutAlt } from 'react-icons/fa';

const UserLinks = () => {
  return (
    <div className="user_links">
      <ul>
        <li>
          <Link to="">
            <FaUserAlt />
            Expand Trial
          </Link>
        </li>
        <li>
          <Link to="">
            <FaKey />
            Change Password
          </Link>
        </li>
        <li>
          <Link to="">
            <FaSave />
            Save Bids
          </Link>
        </li>
        <li>
          <Link to="">
            <FaSignOutAlt />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserLinks;
