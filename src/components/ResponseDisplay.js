import React from 'react';

const ResponseDisplay = ({ data, selectedOptions }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {selectedOptions.includes('alphabets') && (
        <div style={{ marginBottom: '1rem' }}>
          <h3>Alphabets:</h3>
          <p style={{ margin: 0 }}>{data.alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('numbers') && (
        <div style={{ marginBottom: '1rem' }}>
          <h3>Numbers:</h3>
          <p style={{ margin: 0 }}>{data.numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('highest_lowercase_alphabet') && (
        <div style={{ marginBottom: '1rem' }}>
          <h3>Highest Lowercase Alphabet:</h3>
          <p style={{ margin: 0 }}>{data.highest_lowercase_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
