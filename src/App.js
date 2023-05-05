import Form from "./component/Form";
import { useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isValidMobileNumber(mobile)) {
      setMessage('Invalid mobile number.');
      return;
    }

    try {
      const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', { mobile }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status !== 200) {
        throw new Error(response.status);
      }

      setMessage('OTP sent successfully.');
      setMobile('');
    } catch (error) {
      setMessage('Failed to send OTP. Please try again later.');
    }
  }

  function handleChange(event) {
    setMobile(event.target.value);
  }

  function isValidMobileNumber(mobile) {
    const regex = /^[6789]\d{9}$/;
    return regex.test(mobile);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} message={message} onChange={handleChange} mobile={mobile} />
    </div>
  );
}

export default App;
