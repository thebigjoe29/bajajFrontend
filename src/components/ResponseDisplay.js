import React from 'react';

const ResponseDisplay = ({ data, selectedOptions }) => {
  return (
    <div>
      {selectedOptions.includes('alphabets') && (
        <div>
          <h3>Alphabets:</h3>
          <p>{data.alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('numbers') && (
        <div>
          <h3>Numbers:</h3>
          <p>{data.numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('highest_lowercase_alphabet') && (
        <div>
          <h3>Highest Lowercase Alphabet:</h3>
          <p>{data.highest_lowercase_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
