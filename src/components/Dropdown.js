import React from 'react';

const Dropdown = ({ onSelectChange, selectedOptions }) => {
  const handleChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    onSelectChange(selected);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', marginBottom: '1rem' }}>
      <select
        multiple
        onChange={handleChange}
        value={selectedOptions}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box'
        }}
      >
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
      </select>
    </div>
  );
};

export default Dropdown;
