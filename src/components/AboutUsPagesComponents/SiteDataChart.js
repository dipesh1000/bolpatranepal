import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const SiteDataChart = () => {
    return (
        <Container className="chartbox_container">
        <div className="chart_box">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3} className="box">
                        <h1>12.5K</h1>
                        <p>Users Nationwide</p>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="box">
                        <h1>1000+</h1>
                        <p>App Download</p>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="box">
                        <h1>15K</h1>
                        <p>Active Tender</p>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="box">
                        <h1>500</h1>
                        <p>Reviews</p>
                    </Col>
                </Row>
            </Container>
        </div>
        </Container>
    )
}

export default SiteDataChart
