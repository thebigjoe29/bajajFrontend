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
      const response = await axios.post('https://bajajbackend-kltt.onrender.com/bfhl', {
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
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <textarea
          rows="5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter comma-separated values, e.g., A,C,z,1,23"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
      <h5>Note: Drag and multi-select options below, to see all data</h5>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </form>
  );
};

export default JsonInput;
