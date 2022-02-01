import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import SinglePageSection from '../SinglePageSection/SinglePageSection';
import { getTenderSingle } from './redux/Procrument.action';

const SingleProcrument = () => {
  const { id } = useParams();
  console.log(id, 'From id');
  const dispatch = useDispatch();
  // console.log(id, 'from param');
  useEffect(() => {
    dispatch(getTenderSingle(id));
  }, []);
  const procrument = useSelector((state) => state.procrument);
  console.log(procrument, 'single Procrument');
  return (
    <div>
      <SinglePageSection procrument={procrument} />{' '}
    </div>
  );
};

export default SingleProcrument;
