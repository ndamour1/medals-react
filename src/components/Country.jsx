import Medal from "./components/Medal";
import "./components/App.css";

export default function Country(props) {
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  return (
    <div onClick={() => props.onDelete(props.country.id)}>
      {medals.map((medal) => (
        <p>{props.country.name} <Medal /> medals</p>
      ))}
    </div>
  );
}