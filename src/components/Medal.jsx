export default function Medals(props) {
  function medalType(medal) {
    if (medal = "gold") {
      return <button onClick={decrementGold(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementGold(props.country.id)}>+</button>;
    }
    else if (medal = "silver") {
      return <button onClick={decrementSilver(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementSilver(props.country.id)}>+</button>;
    }
    else if (medal = "bronze") {
      return <button onClick={decrementBronze(props.country.id)}>-</button> + " " + getTotalMedalCount(medal) + " " + <button onClick={incrementBronze(props.country.id)}>+</button>;
    }
  }
  
  return (
    <p>{props.medals.name} medals: {medalType(props.medals.name)}</p>
  );
}