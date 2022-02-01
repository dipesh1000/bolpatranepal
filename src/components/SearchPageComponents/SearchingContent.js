import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';
import ProcurementLists from '../Procrument/ProcurementLists';
import FilterAside from './FilterAside';
import Ads2 from '../../images/ads2.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import Procrument from '../Procrument/Procrument';
import SortBy from '../SortBy';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAds } from '../AdsManagement/redux/actions';
import { getTenderList, getUserInterestInterest } from './redux/Search.action';

const SearchingContent = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth, 'is auth');
  const searchList = useSelector((state) => state.searchList);
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAds());
  }, []);

  const [page, setPage] = useState();
  useEffect(() => {
    if (auth?.isAuthenticated && auth?.token) {
      dispatch(getUserInterestInterest());
    } else {
      dispatch(getTenderList(page ? page : 1));
    }
  }, [page]);

  console.log(searchList, 'From searchlis');
  // const procrument = useSelector((state) => state.procrument);

  let active = searchList?.data?.tenders?.pagination?.current_page;
  let totalPage = searchList?.data?.tenders?.pagination?.total_pages;
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  console.log(searchList, 'From Searching List in line 26', items, page);

  // console.log(searchList, 'From new option', procrument);
  return (
    <>
      <SortBy />
      <div className="main_content_box">
        <Container>
          <Row>
            <Col md={3}>
              <FilterAside />
            </Col>
            <Col md={6}>
              <div className="inner_content_box">
                {searchList?.loading ? (
                  <Spinner animation="border" variant="secondary" />
                ) : (
                  <Procrument
                    procrument={searchList?.data?.tenders?.data}
                    isLoading={searchList?.loading}
                    items={items}
                    title="Today Procrument"
                  />
                )}
              </div>
            </Col>
            <Col md={3}>
              <div className="ads_aside">
                {ads.isLoading
                  ? 'loading'
                  : ads &&
                    ads.data &&
                    ads.data.ads &&
                    ads.data.ads
                      .filter((ad) => ad.type === 'Box-Type')
                      .map((item) => (
                        <Link to={item?.link}>
                          <img
                            className="mb-4"
                            src={item?.image}
                            alt="Ads image"
                            width="100%"
                          />
                        </Link>
                      ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchingContent;
