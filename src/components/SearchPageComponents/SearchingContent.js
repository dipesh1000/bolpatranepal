import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ProcurementLists from '../Procrument/ProcurementLists';
import FilterAside from './FilterAside';
import Ads2 from '../../images/ads2.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import Procrument from '../Procrument/Procrument';
import SortBy from '../SortBy';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAds } from '../AdsManagement/redux/actions';

const SearchingContent = ({ searchList, loading }) => {
  const { data } = useSelector((state) => state.searchList);
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAds());
  }, []);
  console.log(ads, 'from ads in line 14');
  const listOfTenders =
    data &&
    data.tenders &&
    data.tenders.data &&
    data.tenders.data.length > 0 ? (
      <ProcurementLists procrument={searchList} />
    ) : (
      <Procrument />
    );
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
                {loading ? (
                  <Spinner animation="border" variant="secondary" />
                ) : (
                  listOfTenders
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
