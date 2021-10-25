import React from 'react';
import { MdOutlineWorkOutline, MdOutlineSource } from 'react-icons/md';
import { IoCalendarOutline, IoWalletOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProcrumentItem = ({ data }) => {
  console.log(data, 'From Data in pro item');
  return (
    <div className="Procrument_Box">
      <Link to={`/procrument/${data.id}`}>
        <div className="procrument_title">{data.title}</div>
        <div className="procrument_Detail">
          <div className="procrument_content">
            <p>{data.short_description}</p>
            <ul>
              <li>
                <MdOutlineWorkOutline />
                Works: <span>{data.works}</span>
              </li>
              <li>
                <IoCalendarOutline />
                Published: <span>{data.published_date}</span>
              </li>
              <li>
                <MdOutlineSource />
                Source: <span>{data.source}</span>
              </li>
              <li>
                <IoWalletOutline />
                Budget: <span>{data.Budget}</span>
              </li>
            </ul>
          </div>
          <div className="procrument_image">
            <img src={data.attachement} width="192" />
          </div>
        </div>
        <div className="procrument_Footer">
          <span>30 days Left</span>
          <div className="procrument_Btns">
            <Button variant="outline-info">Share</Button>
            <Button variant="outline-success">Save</Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProcrumentItem;
