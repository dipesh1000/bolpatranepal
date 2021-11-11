import React from 'react';
import Banner from '../common/Banner/Banner.js';
import SectionTitles from '../sectionTitle/SectionTitles.js';
import OurStory from './ourStory/OurStory.js';
import SiteDataChart from '../DataChart/SiteDataChart.js';
import './style/style.scss'
import Features from './Features';
import ValuedUsers from './ValuedUsers';
import StayinTouch from '../StayInTouch/StayinTouch';
import OurTeamSlider from './OurTeamSlider';

const AboutUsPageComponents = () => {
    return (
        <>
            <Banner pages="About Us" heading="We Are Bolpatra Nepal"/>
            <SectionTitles title="OUR STORY" />
            <OurStory />
            <SiteDataChart />
            <SectionTitles title="WHY CHOOSE US" />
            <Features />
            <ValuedUsers />
            <SectionTitles title="OUR TEAM" />
            <OurTeamSlider />
            <StayinTouch />
        </>
    )
}

export default AboutUsPageComponents
