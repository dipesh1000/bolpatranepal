import React from 'react';
import './style.scss';
import icon from '../../images/announcement.png';

const ServiceLink = () => {
    return (
        <div className="content_center">
            <div className="section_wrapper">
                <div className="section_container">
                    <h4 className="section_title">All in one platform for procurements</h4>
                    <p className="section_content">Bolpatra Nepal is a platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal.</p>
            </div>
            <div className="link_wrapper">
                <div className="link_box">
                    <img src={icon} alt="icon" />
                    <h4 className="title">Get Latest Procurement News</h4>
                    <p className="description">Bolpatra Nepal is a platform for all procurement activities.</p>
                    </div>
                    <div className="link_box">
                    <img src={icon} alt="icon" />
                    <h4 className="title">Get Latest Procurement News</h4>
                    <p className="description">Bolpatra Nepal is a platform for all procurement activities.</p>
                    </div>
                    <div className="link_box">
                    <img src={icon} alt="icon" />
                    <h4 className="title">Get Latest Procurement News</h4>
                    <p className="description">Bolpatra Nepal is a platform for all procurement activities.</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default ServiceLink
