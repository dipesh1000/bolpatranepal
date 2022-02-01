import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaKey, FaSave, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishList } from '../../WishList/redux/action';
import { Badge } from 'react-bootstrap';

const UserLinks = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  useEffect(() => {
    dispatch(getUserWishList());
  }, []);
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
          <Link to="/user/wishlist">
            <FaSave />
            Save Bids{' '}
            <Badge variant="primary">{wishList?.data?.data?.length}</Badge>
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
