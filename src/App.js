import React, { useState } from 'react';
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
    <div>
      <h1>{apiResponse ? apiResponse.roll_number : 'Your Roll Number'}</h1>
      <JsonInput onDataSubmit={handleDataSubmit} />
      {apiResponse && (
        <>
          <Dropdown onSelectChange={handleSelectChange} />
          <ResponseDisplay data={apiResponse} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;
