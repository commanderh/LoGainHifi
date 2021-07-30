import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ handleOnClickToggle, handleOffClick }) {

  return (
    <>
      <Modal onClose={handleOffClick}>
        <LoginForm handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>
      </Modal>
    </>
  );
}

export default LoginFormModal;