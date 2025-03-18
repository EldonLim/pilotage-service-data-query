import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PilotageTable from './PilotageTable';
import fetchPilotageData from './api';

const App: React.FC = () => {
  const [data, setData] = useState(null);

  const handleSearch = async (imo: string) => {
    const result = await fetchPilotageData(imo);
    if (result) setData(result);
    else {
      alert("No data found for this IMO.");
      setData(null); // Keep table empty if no data is found
    }
  };

  return (
    <div className='App'>
      <h1>Pilotage Service Data Query</h1>
      <div className='search-bar'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <center>
        <PilotageTable data={data} />
      </center>
    </div>
  );
};

export default App;
