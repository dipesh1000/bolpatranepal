import React from 'react';
import { MdOutlineWorkOutline, MdOutlineSource } from 'react-icons/md';
import { IoCalendarOutline, IoWalletOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  getUserWishList,
  removeSavedWishListItem,
  storeUserWishList,
} from '../WishList/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/Modal/Modal.action';
const ProcrumentItem = ({ data }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // console.log(pathname, 'From Page url');
  const handleClick = (e, id) => {
    e.preventDefault();
    if (auth?.isAuthenticated && auth?.token) {
      if (pathname === '/user/wishlist') {
        dispatch(removeSavedWishListItem({ tender_id: id }));
        dispatch(getUserWishList());
      } else {
        dispatch(storeUserWishList({ tender_id: id }));
      }
    } else {
      dispatch(openModal('login'));
    }
  };
  return (
    <div className="Procrument_Box">
      <Link to={`/procrument/${data.slug}`}>
        <div className="procrument_title">{data.project_name}</div>
        <div className="procrument_Detail">
          <div className="procrument_content">
            <p>
              {data?.public_entity_name}
              {data?.bid_opening_address}
            </p>
            <ul>
              <li>
                <MdOutlineWorkOutline />
                Works:{' '}
                {data?.procurement_category?.map((item, index) => (
                  <span key={index}>&nbsp; {item?.title}</span>
                ))}
              </li>
              <li>
                <IoCalendarOutline />
                Published: <span>{data?.publication_date}</span>
              </li>
              <li>
                <MdOutlineSource />
                Source: <span>{data?.source?.title}</span>
              </li>
              <li>
                <IoWalletOutline />
                Budget: <span>{data?.project_budget}</span>
              </li>
            </ul>
          </div>
          <div className="procrument_image">
            <img src={data?.image_file[0]?.thumbnail} width="192" />
          </div>
        </div>
      </Link>
      <div className="procrument_Footer">
        <span>{data?.days_left}</span>
        <div className="procrument_Btns">
          <Button variant="outline-info">Share</Button>
          <Button
            variant={`${
              pathname === '/user/wishlist'
                ? 'outline-danger'
                : 'outline-success'
            }`}
            onClick={(e) => handleClick(e, data?.id)}
          >
            {pathname === '/user/wishlist' ? 'Remove' : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcrumentItem;
