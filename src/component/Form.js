
import React from 'react';
import MobileInput from './MobileInput/MobileInput';
import SubmitButton from './Button/Button';

function Form({ onSubmit, message, onChange, mobile }) {
  return (
    <form onSubmit={onSubmit}>
      <MobileInput onChange={onChange} mobile={mobile} />
      <SubmitButton />
      {message && <p>{message}</p>}
    </form>
  );
}

export default Form;
