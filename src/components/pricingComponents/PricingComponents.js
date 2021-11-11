import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../common/Banner/Banner.js';
import CustomCard from './CustomCard.js';
import './style/style.scss';

const PricingComponents = () => {
    const priceData = [
        {
            plan_name: "Basic Plan",
            plan_price: "Rs. 800",
            features: [
                "Mobile App",
                "Website"
            ],
            best_price:false
        },
        {
            plan_name: "Business Plan (5 years)",
            plan_price: "Rs. 5000",
            features: [
                "Mobile App",
                "Website",
                "Email Everyday"
            ],
            best_price:true
        },
        {
            plan_name: "Business 1 year",
            plan_price: "Rs. 1800",
            features: [
                "Mobile App",
                "Website",
                "Email Everyday"
            ],
            best_price:false
        },
    ]


    return (
        <>
            <Banner heading="COmpare the pricing plans of bolpatra nepal." message="Try it free for 14 days." buttonText="Free trial already taken"/>
            <Container>
                <div className="card_holder">
                {priceData?.map(data =>(
                    <>
                    {console.log(data.features)}
                    <CustomCard planName={data.plan_name} planPrice={data.plan_price} features={data.features} bestPrice={data.best_price}/>
                    </>
                ))}
                </div>
            </Container>
        </>
    )
}

export default PricingComponents
