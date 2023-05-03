
import React from 'react';
import './MobileInput.css'


function MobileInput({ onChange, mobile }) {
  return (
    <div>
      <label htmlFor="mobile">Mobile Number:</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={onChange}
        required
        pattern="[0-9]{10}"
        placeholder="Enter your mobile number"
      />
    </div>
  );
}

export default MobileInput;
