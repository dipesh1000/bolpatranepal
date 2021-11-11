import React from 'react';
import './style.scss';

const SectionTitles = ({ title,start }) => {
    return (
        <>
        {!start ?
            <div className="section_title">
                <p>{title}</p>
                <span className="line"></span>
            </div>
        :
        <div className="section_title_start">
            <p>{title}</p>
            <span className="line_start"></span>
        </div>
        }
        </>
    )
}

export default SectionTitles
