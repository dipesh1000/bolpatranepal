import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FeatureContent from './FeatureContent'

const Features = () => {
    return (
        <Container className="holder">
            <FeatureContent logo={<i class="fa fa-newspaper-o fa-2x" aria-hidden="true"></i>} title="Latest Procurement News"
                content="A platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal." />
            <FeatureContent logo={<i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>} title="Latest Procurement News"
                content="A platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal." />
            <FeatureContent logo={<i class="fa fa-file-video-o fa-2x" aria-hidden="true"></i>} title="Latest Procurement News"
                content="A platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal." />
        </Container>
    )
}

export default Features
