import React, { useEffect, useState } from 'react';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './styles/sortby.scss';
import { FaCalendarAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProvince,
  getListSearchingWithMeta,
} from '../SearchPageComponents/redux/Search.action';

const SortBy = () => {
  const [provinceList, setProvinceList] = useState();
  const [searchData, setSearchData] = useState();
  const { provinces, prevSearchingMeta, loading } = useSelector(
    (state) => state.searchList
  );
  console.log(provinces, loading, '>>>>>');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProvince());
  }, []);
  useEffect(() => {
    if (provinces) {
      setProvinceList(provinces);
    }
    if (prevSearchingMeta) {
      setSearchData(prevSearchingMeta);
    }
  }, [provinces]);
  const handleClickForDist = (e, id) => {
    e.preventDefault();
    setSearchData({ ...searchData, district_id: id });
    dispatch(getListSearchingWithMeta(searchData));
  };
  console.log(searchData, 'From province list 31');
  return (
    <div className="sortby_section">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container">
            {loading ? (
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </p>
            ) : (
              provinceList?.length > 0 &&
              provinceList?.map((item, index) => (
                <NavDropdown
                  key={index}
                  title={item?.title}
                  id="basic-nav-dropdown"
                >
                  {item?.districts?.length > 0 &&
                    item?.districts?.map((dist) => (
                      <NavDropdown.Item
                        onClick={(e) => handleClickForDist(e, dist.id)}
                      >
                        {dist.title}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
              ))
            )}
            <div className="nav-item date_dispay_box">
              <FaCalendarAlt />
              <div className="date_dispay">Dec 31, 2021</div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SortBy;
