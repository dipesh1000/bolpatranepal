import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Procruments } from '../../FakeData/Procruments';
import bannerImg from '../../images/banner.png';
import CustomBtn from '../CustomBtn';
import AwardedTable from './AwardedTable';
import Ads1 from '../../images/ads2.png';
import './styles/SinglePage.scss';

const SinglePageSection = () => {
  const postParams = useParams();
  console.log(postParams.id, '>>>>');
  const details = Procruments?.find((i) => i.id === postParams.id);
  console.log(details, 'From Details in Single PAges');
  return (
    <>
      <div className="singlePageBox">
        <div
          className="singlePageBanner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <Container>
            <h1>{details?.title}</h1>
          </Container>
        </div>
        <div className="single_content">
          <Container>
            <Row>
              <Col sm={9}>
                <div className="singlePageContent_wrapper">
                  <div className="mainTitle">{details?.title}</div>
                  <div className="singlePageContent_cols">
                    <div className="attachementContainer">
                      <img src={details?.attachement} alt="" />
                      <div className="buttonFlexGroup">
                        <Button variant="outline-info">Download</Button>
                        <Button variant="outline-secondary">Print</Button>
                        <Button variant="outline-success">Save</Button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <h6>Public Entity Name</h6>
                        <p>{details?.short_description}</p>
                      </li>
                      <li>
                        <h6>Procruments Type</h6>
                        <p>{details?.works}</p>
                      </li>
                      <li>
                        <h6>Published Date</h6>
                        <p>{details?.published_date}</p>
                      </li>
                      <li>
                        <h6>Bid Sumbmission</h6>
                        <p>{details?.published_date}</p>
                      </li>
                      <li>
                        <h6>Project Category</h6>
                        <p>{details?.works}</p>
                      </li>
                      <li>
                        <h6>Notice Category</h6>
                        <p>{details?.works}</p>
                      </li>
                      <li>
                        <h6>Source</h6>
                        <p>{details?.source}</p>
                      </li>
                      <li>
                        <h6>Tendor Price</h6>
                        <p>{details?.Budget}</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <AwardedTable />
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <img src={Ads1} width="100%" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SinglePageSection;
