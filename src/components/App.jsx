import { useState } from 'react';
import Country from "./components/Country";
import "./components/App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 0, bronze: 0 },
    { id: 2, name: 'China', gold: 3, silver: 0, bronze: 0 },
    { id: 3, name: 'France', gold: 0, silver: 0, bronze: 0 },
  ]);

  function handleDelete(countryId) {
    console.log(`delete country: ${countryId}`);
    setCountries(countries.filter((c) => c.id !== countryId));
  }
  
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.id} country={country} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App
