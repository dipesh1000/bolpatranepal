import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/Modal/Modal.action';
import LoginComponent from '../Auth/LoginComponent';

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
      ) : null}
    </>
  );
};

export default CustomModal;
