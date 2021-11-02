import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/style.scss';

const ServicesDescription = ({serviceImage, contentHeader, contentDescription}) => {
    return (
        <div className="wrapper">
            <Container >
                <Row className="style_modifier">
                    <Col lg={6} sm={12}>
                    <div className="content_image">
                        <img src={serviceImage} alt="img" />
                    </div>
                    </Col>

                    <Col lg={6} sm={12}>
                        <div className="content">
                            <h3 className="content_header">
                                {contentHeader}
                            </h3>
                            <p className="content_description">
                                {contentDescription}
                            </p>
                            <Link to={`/ourservices/${contentHeader}`} className='learnmore_btn'>Learn more</Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ServicesDescription
