import React, { useEffect, useState } from 'react';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './styles/sortby.scss';
import { FaCalendarAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProvince,
  getListSearchingWithMeta,
} from '../SearchPageComponents/redux/Search.action';
import SortByDropdown from './SortByDropdown';

const SortBy = () => {
  const [provinceList, setProvinceList] = useState();
  const [searchData, setSearchData] = useState();
  const { provinces, prevSearchingMeta, loading } = useSelector(
    (state) => state.searchList
  );
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
  }, [provinces, prevSearchingMeta]);
  const handleClickForDist = (e, id, name) => {
    e.preventDefault();
    if (name === 'province') {
      setSearchData({ ...searchData, district: null, province: id });
    }
    if (name === 'district') {
      setSearchData({ ...searchData, district: id, province: null });
    }
    dispatch(getListSearchingWithMeta(searchData));
  };
  // const handleClickForProvince = (e, id) => {
  //   e.preventDefault();
  //   setSearchData({ ...searchData, province: id, district: null });
  //   dispatch(getListSearchingWithMeta(searchData));
  // };
  console.log(searchData, 'From search data');
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div className="sortby_section">
      <Navbar expand="lg" className="pt-0 pb-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container">
            {loading ? (
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </p>
            ) : (
              <>
                {/* {provinceList?.length > 0 &&
                  provinceList?.map((item, index) => (
                    <NavDropdown
                      key={index}
                      title={item?.title}
                      id={`basic-nav-dropdown${index}`}
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      {item?.districts?.length > 0 &&
                        item?.districts?.map((dist) => (
                          <NavDropdown.Item
                            id={`basic-nav-dropdown${index}`}
                            onClick={(e) => handleClickForDist(e, dist.id)}
                          >
                            {dist.title}
                          </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                  ))} */}
                <SortByDropdown
                  provinceList={provinceList}
                  handleClickForDist={handleClickForDist}
                />
              </>
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
