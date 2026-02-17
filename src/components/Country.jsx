import Medal from "./Medal";

function Country(props) {
  function getMedalsTotal() {
    let sum = 0;
    props.medals.forEach((medal) => {
      sum += props.country[medal.name];
    });
    return sum;
  }

  return (
    <div className="country">
      <div className="header">
        <h3>{props.country.name}</h3>
        <h3>{getMedalsTotal()}</h3>
        <div 
          className="basket" 
          onClick={() => props.onDelete(props.country.id)}
          >
            🗑️
        </div>
      </div>
      {props.medals.map((medal) => (
        <Medal 
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          key={medal.id} 
          medal={medal} 
          country={props.country}
        />
      ))}
    </div>
  );
}

export default Country;

// import { useState } from 'react';
// import Medal from "./Medal";

// export default function Country(props) {
//   const medals = useState([
//     { id: 1, name: "gold" },
//     { id: 2, name: "silver" },
//     { id: 3, name: "bronze" }
//   ]);

//   return (
//     <div onClick={() => props.onDelete(props.country.id)}>
//       {medals.map((medal) => (
//         <Medal key={medal.id} medal={medal} />
//       ))}
//     </div>
//   );
// }