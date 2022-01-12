import React from 'react';
import { MdOutlineWorkOutline, MdOutlineSource } from 'react-icons/md';
import { IoCalendarOutline, IoWalletOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProcrumentItem = ({ data }) => {
  console.log(data, 'From Data in pro item');
  return (
    <div className="Procrument_Box">
      <Link to={`/procrumentss/${data.slug}`}>
        <div className="procrument_title">{data.project_name}</div>
        <div className="procrument_Detail">
          <div className="procrument_content">
            <p>
              {data?.public_entity_name}
              {data?.bid_opening_address}
            </p>
            <ul>
              <li>
                <MdOutlineWorkOutline />
                Works:{' '}
                {data?.procurement_category?.map((item, index) => (
                  <span key={index}>&nbsp; {item?.title}</span>
                ))}
              </li>
              <li>
                <IoCalendarOutline />
                Published: <span>{data?.publication_date}</span>
              </li>
              <li>
                <MdOutlineSource />
                Source: <span>{data?.source?.title}</span>
              </li>
              <li>
                <IoWalletOutline />
                Budget: <span>{data?.project_budget}</span>
              </li>
            </ul>
          </div>
          <div className="procrument_image">
            <img src={data?.image_file[0]?.thumbnail} width="192" />
          </div>
        </div>
        <div className="procrument_Footer">
          <span>{data?.days_left}</span>
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
