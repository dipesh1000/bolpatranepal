import React, { useEffect } from 'react';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from 'react-bootstrap';
import { VscFilePdf } from 'react-icons/vsc';
import { Link, useParams } from 'react-router-dom';
import { Procruments } from '../../FakeData/Procruments';
import bannerImg from '../../images/banner.png';
import AwardedTable from './AwardedTable';
import Ads1 from '../../images/ads2.png';
import './styles/SinglePage.scss';
import Procrument from '../Procrument/Procrument';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAds } from '../AdsManagement/redux/actions';

const SinglePageSection = ({ procrument }) => {
  const postParams = useParams();
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  console.log(procrument, 'From line 27');
  useEffect(() => {
    dispatch(getAllAds());
  }, []);
  const details = Procruments?.find((i) => i.id === postParams.id);

  return (
    <>
      <div className="singlePageBox">
        <div
          className="singlePageBanner"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + bannerImg})`,
          }}
        >
          <Container>
            <h1> {procrument?.singledata?.data?.project_name}</h1>
          </Container>
        </div>
        <div className="single_content">
          <Container>
            <Row>
              <Col sm={9}>
                {procrument.loading ? (
                  <Spinner animation="border" variant="secondary" />
                ) : (
                  <div className="singlePageContent_wrapper">
                    <div className="mainTitle">
                      {procrument?.singledata?.data?.project_name}
                    </div>
                    <div
                      style={{
                        backgroundColor: 'green',
                        color: '#fff',
                        fontSize: '12px',
                        width: 'fit-content',
                        fontWeight: '500',
                        borderRadius: '4px',
                        padding: '.2em 1em',
                        boxShadow:
                          'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
                      }}
                    >
                      {procrument?.singledata?.data?.current_status}
                    </div>
                    <div className="singlePageContent_cols">
                      <div className="attachementContainer">
                        <img
                          src={
                            procrument?.singledata?.data?.image_file[0]
                              .thumbnail
                          }
                          alt=""
                        />
                        <div className="buttonFlexGroup">
                          <Button variant="outline-info">Download</Button>
                          <Button variant="outline-secondary">Print</Button>
                          <Button variant="outline-success">Save</Button>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <h6>Public Entity Name</h6>
                          <p>
                            {procrument?.singledata?.data?.public_entity_name}
                          </p>
                        </li>
                        <li>
                          <h6>Project Entity</h6>
                          <p>{procrument?.singledata?.data?.project_name}</p>
                        </li>
                        <li>
                          <h6>Procruments Type</h6>
                          {procrument?.singledata?.data?.procurement_category &&
                          procrument?.singledata?.data?.procurement_category
                            .length > 0
                            ? procrument?.singledata?.data?.procurement_category.map(
                                (cat, index) => (
                                  <p key={index}>{cat && cat.title}</p>
                                )
                              )
                            : ''}
                        </li>
                        <li>
                          <h6>IFB/RFP/EOI/PQ No</h6>
                          <p>
                            {
                              procrument?.singledata?.data
                                ?.unique_identification_number
                            }
                          </p>
                        </li>
                        <li>
                          <h6>Notice Published Date / Current Status</h6>
                          <p>
                            {
                              procrument?.singledata?.data
                                ?.notice_publication_date
                            }{' '}
                          </p>
                        </li>
                        <li>
                          <h6>Bid Sumbmission</h6>
                          <p>
                            {procrument?.singledata?.data?.pre_meeting_date}
                            {
                              procrument?.singledata?.data
                                ?.pre_bid_meeting_address
                            }
                            {procrument?.singledata?.data?.bid_opening_address}
                            {procrument?.singledata?.data?.bid_opening_date}
                            {
                              procrument?.singledata?.data
                                ?.bid_submission_address
                            }
                            {
                              procrument?.singledata?.data
                                ?.last_bid_submission_date
                            }
                            {procrument?.singledata?.data?.work_start_date}
                          </p>
                          <p>
                            {
                              procrument?.singledata?.data
                                ?.bid_submission_address
                            }
                          </p>
                        </li>
                        <li>
                          <h6>Brief Description Of Work</h6>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                procrument?.singledata?.data
                                  ?.brief_descritpion_of_work,
                            }}
                          >
                            {/* {
                              procrument?.singledata?.data
                                ?.brief_descritpion_of_work
                            } */}
                          </p>
                        </li>
                        {/* <li>
                          <h6>Notice Category</h6>
                          <p>{procrument?.singledata?.data?.bidding_type}</p>
                        </li> */}
                        <li>
                          <h6>Procrument Method</h6>
                          <p>
                            {
                              procrument?.singledata?.data?.procurement_method
                                ?.title
                            }
                          </p>
                        </li>
                        <li>
                          <h6>Source</h6>
                          <p>{procrument?.singledata?.data?.source?.title}</p>
                        </li>
                        <li>
                          <h6>Tendor Price</h6>
                          <p>{procrument?.singledata?.data?.project_budget}</p>
                        </li>
                        <li>
                          <h6>Bank Guaurentee Amount</h6>
                          <p>
                            {
                              procrument?.singledata?.data
                                ?.bid_bond_guaurentee_amount
                            }
                          </p>
                        </li>
                        <li>
                          <h6>Bid Document Fee / Bank</h6>
                          <p>
                            {procrument?.singledata?.data?.bid_document_fee} /{' '}
                            {procrument?.singledata?.data?.bank?.name}
                          </p>
                        </li>
                        <li>
                          <h6>Download Bid Document</h6>
                          {/* {procrument?.singledata?.data?.document_link} */}
                          <a href={procrument?.singledata?.data?.document_link}>
                            <VscFilePdf style={{ fontSize: 90 }} />
                          </a>
                        </li>
                        <li>
                          <h6>Document Assistance</h6>
                          {/* {procrument?.singledata?.data?.document_link} */}
                          <a href={procrument?.singledata?.data?.document_link}>
                            <VscFilePdf style={{ fontSize: 90 }} />
                          </a>
                        </li>
                        {/* <li>
                          <Accordion defaultActiveKey="0">
                            <Card
                              style={{
                                marginBottom: '1em',
                                border: '1px solid #ddd',
                              }}
                            >
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                Procrument Entity Contact Details
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  <div className="d-flex">
                                    <div className="text-bold">
                                      Name Of Official Inviting Bid
                                    </div>
                                    <div className="ml-4">
                                      {
                                        procrument?.singledata?.data
                                          ?.name_of_official_inviting_bid
                                      }
                                    </div>
                                  </div>
                                  <div className="d-flex">
                                    <div className="text-bold">
                                      Designation Of The Official Inviting Bid
                                    </div>
                                    <div className="ml-4">
                                      {
                                        procrument?.singledata?.data
                                          ?.designation_of_official_inviting_bid
                                      }
                                    </div>
                                  </div>
                                  <div className="d-flex">
                                    <div className="text-bold">
                                      Address Of Official Inviting Bid
                                    </div>
                                    <div className="ml-4">
                                      {
                                        procrument?.singledata?.data
                                          ?.address_of_official_inviting_bid
                                      }
                                    </div>
                                  </div>
                                  <div className="d-flex">
                                    <div className="text-bold">
                                      Contact Of The Official Inviting Bid
                                    </div>
                                    <div className="ml-4">
                                      {
                                        procrument?.singledata?.data
                                          ?.contact_of_official_inviting_bid
                                      }
                                    </div>
                                  </div>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                            <Card
                              style={{
                                marginBottom: '1em',
                                border: '1px solid #ddd',
                              }}
                            >
                              <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </li> */}
                      </ul>
                    </div>
                    {/* <div>
                      <AwardedTable />
                    </div> */}
                  </div>
                )}
              </Col>
              <Col sm={3}>
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
      </div>
    </>
  );
};

export default SinglePageSection;
