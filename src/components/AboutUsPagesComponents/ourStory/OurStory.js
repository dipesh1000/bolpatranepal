import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import StoryImage from '../StoryImage.js';


const OurStory = () => {
    return (
        <div className="ourStory">
        <Container>
            <Row>
                <Col lg={7} className="story_content">
                    <h1>Bolpatra Nepal is a platform for all procurement activities of government of Nepal. </h1>
                    <p>
                    Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. 
                    Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal. 
                    Lorem ipsum dolor sit amet. Bolpatra Nepal is a platform for all procurement activities of government of Nepal. 
                    </p>
                    <p>Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal. Lorem ipsum dolor sit amet.
                    </p>
                </Col>
                <Col lg={5}>
                    <StoryImage />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default OurStory
