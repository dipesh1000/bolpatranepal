import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/Modal/Modal.action';
import LoginComponent from '../Auth/LoginComponent';
import OtpComponent from '../Auth/OtpComponent';
import RegisterComponent from '../Auth/RegisterComponent';

const CustomModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {modal.modalName === 'login' ? (
        <Modal
          show={modal.modalStatus}
          onHide={handleClose}
          size="xl"
          dialogClassName="modal_width"
        >
          <LoginComponent />
        </Modal>
      ) : modal.modalName === 'register' ? (
        <Modal
          show={modal.modalStatus}
          onHide={handleClose}
          size="xl"
          dialogClassName="modal_width"
        >
          <RegisterComponent />
        </Modal>
      ) : modal.modalName === 'otp' ? (
        <Modal
          show={modal.modalStatus}
          onHide={handleClose}
          size="md"
          dialogClassName="modal_width"
        >
          <OtpComponent />
        </Modal>
      ) : null}
    </>
  );
};

export default CustomModal;
