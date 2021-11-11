import React from 'react';
import './style/style.scss'
import { Container } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import Banner from '../common/Banner/Banner';
import SectionTitles from '../sectionTitle/SectionTitles';
import LinkBox from '../LinkBox/LinkBox';
import SiteDataChart from '../DataChart/SiteDataChart';
import StayinTouch from '../StayInTouch/StayinTouch';
import ServiceLink from '../ServiceLink/ServiceLink';
import serviceData from '../../FakeData/serviceData.js'

const ServiceComponents = () => {
    // const location = useLocation();
    const {slug} = useParams();
    const serviceDetail =  serviceData?.find((i) => i.slug === slug)
    console.log(serviceData,"..")

    return (
        <>
            <Banner pages="Our Service" heading={serviceDetail.serviceHeader}/>
            <Container>
            <div className="info_container">
                <div className="info_content">
                    <SectionTitles start title={serviceDetail.serviceHeader} />
                    <p className="description">{serviceDetail.servicesDescription}</p>
                </div>
                <div className="link_section">
                    <LinkBox />
                </div>
            </div>
            <div className="procurement_container">
                <ul><li>Procurement activities of government of Nepal.</li></ul>
                <p>Bolpatra Nepal is a platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. 
                Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal. Lorem ipsum dolor sit amet. Bolpatra Nepal is a platform for all procurement activities of government of Nepal. </p>
                <p>
                Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal. Lorem ipsum dolor sit amet.
                </p>
            </div>
            <SiteDataChart />
            <ServiceLink />
            </Container>
            <div className="information_wrapper">
                <div className="content_wrapper">
                    <h4 className="title">Manage all your procurements at one place and get notified</h4>
                    <p>Bolpatra Nepal is a platform for all procurement activities of government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of Government of Nepal. Lorem ipsum dolor sit amet a platform for all procurement activities of gvernment of Nepal. Bolpatra Nepal is a platform for all procurement activities of government of Nepal.  Lorem ipsum dolor sit amet a platform for all procurements.</p>
                </div>
            </div>
            <StayinTouch />
        </>
    )
}

export default ServiceComponents
