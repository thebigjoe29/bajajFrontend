import React from 'react';

const Dropdown = ({ onSelectChange }) => {
  const handleChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    onSelectChange(selected);
  };

  return (
    <div>
      <select multiple onChange={handleChange}>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
      </select>
    </div>
  );
};

export default Dropdown;
