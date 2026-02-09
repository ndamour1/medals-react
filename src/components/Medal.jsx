export default function Medals(props) {
  function medalType(medalName) {
    if (medalName = "gold") {
      return <button onClick={decrementGold(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementGold(props.country.id)}>+</button>;
    }
    else if (medalName = "silver") {
      return <button onClick={decrementSilver(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementSilver(props.country.id)}>+</button>;
    }
    else if (medalName = "bronze") {
      return <button onClick={decrementBronze(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementBronze(props.country.id)}>+</button>;
    }
  }
  
  return (
    <p>{props.medal.name} medals: {medalType(props.medal.name)}</p>
  );
}