import { useState, useRef } from "react";
import Country from "./components/Country";
import "./App.css";
import NewCountry from "./components/NewCountry";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  function handleAdd(name) {
    console.log(`add country: ${name}`);
    setCountries(
      [...countries].concat({
        id:
          countries.length === 0
            ? 1
            : Math.max(...countries.map((country) => country.id)) + 1,
        name: name,
        gold: 0,
        silver: 0,
        bronze: 0,
      })
    );
  }
  function handleDelete(id) {
    console.log(`delete country: ${id}`);
    setCountries(countries.filter((c) => c.id !== id));
  }
  function handleIncrement(countryId, medalName) {
    const idx = countries.findIndex((c) => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  function handleDecrement(countryId, medalName) {
    const idx = countries.findIndex((c) => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);
  }

  function getAllMedalsTotal() {
    let sum = 0;
    medals.current.forEach((medal) => {
      sum += countries.reduce((a, b) => a + b[medal.name], 0);
    });
    return sum;
  }

  return (
    <>
      <h1 id="page-header">Olympic Medals {getAllMedalsTotal()}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            key={country.id}
            country={country}
            medals={medals.current}
          />
        ))}
        <NewCountry onAdd={handleAdd} />
      </div>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import Country from "./components/Country";
// import NewCountry from "./components/NewCountry";
// import "./App.css";

// function App() {
//   const [countries, setCountries] = useState([
//     { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
//     { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
//     { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 }
//   ]);

//   // function incrementGold(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   countriesMutable[idx].gold += 1;
//   //   console.log(countriesMutable);
//   // }

//   // function decrementGold(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   if (countriesMutable[idx].gold != 0) {
//   //     countriesMutable[idx].gold -= 1;
//   //   }
//   //   console.log(countriesMutable);
//   // }

//   // function incrementSilver(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   countriesMutable[idx].silver += 1;
//   //   console.log(countriesMutable);
//   // }

//   // function decrementSilver(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   if (countriesMutable[idx].silver != 0) {
//   //     countriesMutable[idx].silver -= 1;
//   //   }
//   //   console.log(countriesMutable);
//   // }

//   // function incrementBronze(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   countriesMutable[idx].bronze += 1;
//   //   console.log(countriesMutable);
//   // }

//   // function decrementBronze(countryId) {
//   //   const countriesMutable = [...countriesImmutable];
//   //   const idx = countriesMutable.findIndex((c) => c.id === countryId);
//   //   if (countriesMutable[idx].bronze != 0) {
//   //     countriesMutable[idx].bronze -= 1;
//   //   }
//   //   console.log(countriesMutable);
//   // }

//   function getTotalMedalCount(medal) {
//     return countries.reduce((a, b) => a + b[medal], 0);
//   }

//   function handleDelete(countryId) {
//     console.log(`delete country: ${countryId}`);
//     setCountries(countries.filter((c) => c.id !== countryId));
//   }
  
//   return (
//     <div>
//       <h1>Olympic Medals {getTotalMedalCount("gold") + getTotalMedalCount("silver") + getTotalMedalCount("bronze")}</h1>
//       {countries.map((country) => (
//         <Country key={country.id} country={country} onDelete={handleDelete} />
//       ))}
//       <NewCountry onAdd={handleAdd} />
//     </div>
//   );
// }

// export default App
