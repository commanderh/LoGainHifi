import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignupFormModal({handleOnClickToggle, handleOffClick}) {

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Signup</button> */}
      {/* {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )} */}
      <Modal onClose={handleOffClick}>
        <SignUpForm handleOnClickToggle={handleOnClickToggle}/>
      </Modal>
    </>
  );
}

export default SignupFormModal;