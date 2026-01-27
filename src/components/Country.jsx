export default function Country(props) {
  const [gold, setCount] = useState(0)

  return (
    <div onClick={() => props.onDelete(props.country.id)}>
      <p>{props.country.name} gold medals: <button onClick={() => setCount((gold) => gold + 1)}>{props.country.gold}</button></p>
    </div>
  );
}