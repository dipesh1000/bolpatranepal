import React from 'react';
import AboutUsBanner from './aboutUsBanner/AboutUsBanner';
import SectionTitles from './SectionTitles';
import OurStory from './ourStory/OurStory.js';
import SiteDataChart from './SiteDataChart.js';
import './style/style.scss'
import Features from './Features';
import ValuedUsers from './ValuedUsers';
import StayinTouch from './StayinTouch';
import OurTeamSlider from './OurTeamSlider';

const AboutUsPageComponents = () => {
    return (
        <>
            <AboutUsBanner />
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
