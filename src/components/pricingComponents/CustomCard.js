import React from 'react';
import "./style/style.scss";

const CustomCard = ({planName,planPrice,features,bestPrice}) => {
    return (
        <div className="card">
            {bestPrice &&
                <div className="tag">Best Value</div>
            }
            <p className="plan_name">{planName}</p>
            <p className="plan_price">{planPrice}</p>
            <p className="plan_type">Npr / User / 1 year</p>
            <span className="border"></span>
            <ul>
                {features.map((feature, index) =>(
                    <>
                    {console.log(feature)}
                    <li><i class="fa fa-check" aria-hidden="true"></i>{feature}</li>
                    </>
                    ))}
            </ul>
            <button className="get_started_btn">Get Started</button>
        </div>
    )
}

export default CustomCard
