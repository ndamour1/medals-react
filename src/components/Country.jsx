import { useState } from 'react'
import './App.css'

function Country() {
    const name = [
      { value: "Argentina", label: "Argentina" },
      { value: "Australia", label: "Australia" },
      { value: "Brazil", label: "Brazil" },
      { value: "Canada", label: "Canada" },
      { value: "China", label: "China" },
      { value: "Congo", label: "Democratic Republic of the Congo" },
      { value: "England", label: "England" },
      { value: "Egypt", label: "Egypt" },
      { value: "France", label: "France" },
      { value: "Germany", label: "Germany" },
      { value: "Greece", label: "Greece" },
      { value: "Greenland", label: "Greenland" },
      { value: "Iceland", label: "Iceland" },
      { value: "Ireland", label: "Ireland" },
      { value: "Italy", label: "Italy" },
      { value: "Japan", label: "Japan" },
      { value: "Kenya", label: "Kenya" },
      { value: "Mexico", label: "Mexico" },
      { value: "New Zealand", label: "New Zealand" },
      { value: "Norway", label: "Norway" },
      { value: "Puerto Rico", label: "Puerto Rico" },
      { value: "Scotland", label: "Scotland" },
      { value: "South Africa", label: "South Africa" },
      { value: "South Korea", label: "South Korea" },
      { value: "Spain", label: "Spain" },
      { value: "Tanzania", label: "Tanzania" },
      { value: "United States", label: "United States" },
      { value: "Vietnam", label: "Vietnam" },
      { value: "Wales", label: "Wales" }
    ];
    const [gold, setCount] = useState(0)

  return (
    <div className="card">
      <p><Select
          className="item"
          styles={{ width: "20px" }}
          value={name.value}
          options={name}
          defaultValue={options[25]}
          /> gold medals: <button onClick={() => setCount((gold) => gold + 1)}>{gold}</button></p>
    </div>
  )
}

export default Country