import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (imo: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [imo, setImo] = useState("");

  const handleSearch = () => {
    if (isValidIMO(imo)) {
      onSearch(imo);
    } else {
      alert("Invalid IMO number!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter IMO number"
        value={imo}
        onChange={(e) => setImo(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const isValidIMO = (imo: string): boolean => {
    if (!/^\d{7}$/.test(imo)) return false;
    const digits = imo.split('').map(Number);
    const sum = digits.slice(0, 6)
      .map((num, i) => num * (7 - i))
      .reduce((a, b) => a + b, 0);
    return sum % 10 === digits[6];
  };
  

export default SearchBar;
