import React, { useState, useEffect } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = '21BCE1444';
  }, []);

  const handleDataSubmit = (data) => {
    setApiResponse(data);
  };

  const handleSelectChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1>{apiResponse ? apiResponse.roll_number : 'Your Roll Number'}</h1>
      <JsonInput onDataSubmit={handleDataSubmit} />
      {apiResponse && (
        <>
          <Dropdown onSelectChange={handleSelectChange} selectedOptions={selectedOptions} />
          <ResponseDisplay data={apiResponse} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;
