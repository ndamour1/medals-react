import Medal from "./components/Medal";
import "./components/App.css";

export default function Country(props) {
  return (
    <div onClick={() => props.onDelete(props.country.id)}>
      {medals.map((medal) => (
        <Medal key={medal.name} />
      ))}
    </div>
  );
}