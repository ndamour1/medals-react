import { useState } from 'react';
import Country from "./components/Country";
import "./components/App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 }
  ]);

  function incrementGold(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].gold += 1;
    console.log(countriesMutable);
  }

  function decrementGold(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if (countriesMutable[idx].gold != 0) {
      countriesMutable[idx].gold -= 1;
    }
    console.log(countriesMutable);
  }

  function incrementSilver(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].silver += 1;
    console.log(countriesMutable);
  }

  function decrementSilver(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if (countriesMutable[idx].silver != 0) {
      countriesMutable[idx].silver -= 1;
    }
    console.log(countriesMutable);
  }

  function incrementBronze(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].bronze += 1;
    console.log(countriesMutable);
  }

  function decrementBronze(countryId) {
    const countriesMutable = [...countriesImmutable];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if (countriesMutable[idx].bronze != 0) {
      countriesMutable[idx].bronze -= 1;
    }
    console.log(countriesMutable);
  }

  function getTotalMedalCount(medal) {
    return countries.reduce((a, b) => a + b[medal], 0);
  }

  function handleDelete(countryId) {
    console.log(`delete country: ${countryId}`);
    setCountries(countries.filter((c) => c.id !== countryId));
  }
  
  return (
    <div>
      <h1>Olympic Medals {getTotalMedalCount("gold") + getTotalMedalCount("silver") + getTotalMedalCount("bronze")}</h1>
      {countries.map((country) => (
        <Country key={country.id} country={country} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App
