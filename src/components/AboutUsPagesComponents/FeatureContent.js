import React from 'react'
import { Container } from 'react-bootstrap'

const FeatureContent = ({ logo, title, content }) => {
    return (
        <div className="featureContent_container">
            <div className="icon">{logo}</div>
            <h4 className="title">{title}</h4>
            <div className="content">{content}</div>
        </div>
    )
}

export default FeatureContent
