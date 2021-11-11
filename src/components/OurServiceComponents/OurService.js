import React from 'react';
import Banner from '../common/Banner/Banner.js';
import OurTeamSlider from '../AboutUsPagesComponents/OurTeamSlider';
import ServicesDescription from './ServicesDescription';
import SectionTitles from '../sectionTitle/SectionTitles.js';
import datas from '../../FakeData/serviceData.js';
import StayinTouch from '../StayInTouch/StayinTouch.js';



const OurService = () => {
    
  
    return (
        <div>
            <Banner  page="Our Services" heading="Why Choose Us" message="We Are Bolpatra Nepal" />
            <SectionTitles title="OUR SERVICES" />
            {datas?.map((data,index)=>(
            <div className={index%2 ? "even_background":"odd_background" }>
                <ServicesDescription serviceImage={data.img} contentHeader={data.serviceHeader} contentDescription={data.servicesDescription} slug={data.slug}/>
            </div>
              ))}
             <SectionTitles title="OUR TEAM" />
            <OurTeamSlider />
            <StayinTouch />
        </div>
    )
}

export default OurService
