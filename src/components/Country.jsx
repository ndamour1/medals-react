import { useState } from 'react';
import Medal from "./Medal";

export default function Country(props) {
  const medals = useState([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" }
  ]);

  return (
    <div onClick={() => props.onDelete(props.country.id)}>
      {medals.map((medal) => (
        <Medal key={medal.name} medal={medal} />
      ))}
    </div>
  );
}