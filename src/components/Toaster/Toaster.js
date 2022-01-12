import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);
  console.log(error, 'From SuccessField');
  const notify = () => {
    if (success?.message) {
      toast.success(success?.message);
    }
    if (error?.message) {
      toast.error(error?.message);
    }
  };
  useEffect(() => {
    notify();
    // eslint-disable-next-line
  }, [error.message, success.message]);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toaster;
