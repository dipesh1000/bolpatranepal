import React from 'react';
import './style.scss';
import datas from '../../FakeData/serviceData.js';
import { Link, NavLink } from 'react-router-dom';

const LinkBox = () => {
    return (
        <div className="link_container">
            <h5 className="heading">All Services</h5>
            {datas?.map((data,index) =>(
                <ul>
                    <li>
                        <img src={data.icon} alt="icon" />
                        <NavLink key={index} to={{pathname: `/ourservices/${data.slug}`, state: {header: data.serviceHeader, description : data.servicesDescription}}} >{data.serviceHeader}</NavLink>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default LinkBox
