import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ onDataSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic input validation
    if (!userId || typeof userId !== 'string') {
      setError('Invalid or missing user_id. It must be a non-empty string.');
      return;
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      setError('Invalid or missing email. It must be a valid email address.');
      return;
    }

    if (!rollNumber || typeof rollNumber !== 'string') {
      setError('Invalid or missing roll_number. It must be a non-empty string.');
      return;
    }

    // Convert comma-separated values to array
    const data = inputValue.split(',').map(item => item.trim());

    // Make API request using Axios
    try {
      const response = await axios.post('http://localhost:3000/bfhl', {
        data: data,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
      });
      
      onDataSubmit(response.data);
      setError('');
    } catch (err) {
      setError('Error sending data to the server.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter comma-separated values, e.g., A,C,z,1,23'
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default JsonInput;
