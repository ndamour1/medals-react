function Medal(props) {
  return (
    <div className="medals">
      {props.medal.name} medals:
      <div className="button">
        <button 
          onClick={() => props.onDecrement(props.country.id, props.medal.name)}
          disabled={props.country[props.medal.name] === 0}
        >
          -
        </button>
        <div className="medal-count">{props.country[props.medal.name]}</div>
        <button onClick={() => props.onIncrement(props.country.id, props.medal.name)}>+</button>
      </div>
    </div>
  );
}

export default Medal;

// export default function Medals(props) {
//   // function medalType(medalName) {
//   //   if (medalName = "gold") {
//   //     return <button>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementGold(props.country.id)}>+</button>;
//   //   }
//   //   else if (medalName = "silver") {
//   //     return <button>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementSilver(props.country.id)}>+</button>;
//   //   }
//   //   else if (medalName = "bronze") {
//   //     return <button>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementBronze(props.country.id)}>+</button>;
//   //   }
//   // }
  
//   return (
//     <p>{props.medal.name} medals: {props.medal.name}</p>
//   );
// }