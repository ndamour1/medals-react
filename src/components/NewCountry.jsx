import { useState } from "react";
import trigger from "../assets/trigger.svg";
import "./NewCountry.css";

function NewCountry(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [newCountryName, setNewCountryName] = useState("");

    function hideDialog() {
        setNewCountryName("");
        setShowDialog(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(newCountryName);
        hideDialog();
    }
    function handleKeyUp(e) {
        e.keyCode === 27 && hideDialog();
    }

    return (
        <>
            {showDialog ? (
                <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
                    <div id="overlay" onClick={hideDialog}></div>
                    <div id="dialog">
                        <h3>Enter new country name</h3>
                        <input
                            type="text"
                            name="NewCountryName"
                            placeholder="enter name"
                            autoFocus
                            autoComplete="off"
                            value={newCountryName}
                            onChange={(e) => setNewCountryName(e.target.value)}
                        />
                        <div id="buttons">
                            <button
                                type="submit"
                                id="save"
                                disabled={newCountryName.trim().length === 0}
                            >
                                save
                            </button>
                            <button id="cancel" type="button" onClick={hideDialog}>
                                cancel
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <img
                    src={trigger}
                    alt="New Country"
                    title="New Country"
                    id="trigger"
                    onClick={() => setShowDialog(true)}
                />
            )}
        </>
    );
}

export default NewCountry;

// import { useState } from "react";
// import trigger from "../assets/trigger.svg";

// export default function NewWord(props) {
//     const [name, setName] = useState("Latveria");
//     const [gold, setGold] = useState(0);
//     const [silver, setSilver] = useState(0);
//     const [bronze, setBronze] = useState(0);

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (name !== "" && name !== null) {
//             props.onAdd(name, gold, silver, bronze);
//             hideDialog();
//         }
//     }
//     function hideDialog() {
//         setName("Latveria");
//         setGold(0);
//         setSilver(0);
//         setBronze(0);
//         setShowDialog(false);
//     }

//     return (
//     <>
//       {showDialog ? (
//         <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
//           <div id="overlay" onClick={hideDialog}></div>
//           <div id="dialog">
//             <header>
//               Add Country
//             </header>
//             <div>
//               <div></div>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <div className="value">{name}</div>
//             </div>
//             <div>
//               <div></div>
//               <input
//                 id="gold"
//                 type="number"
//                 min="0"
//                 max="100"
//                 value={gold}
//                 onChange={(e) => setGold(e.target.value)}
//               />
//               <div className="value">{gold}</div>
//             </div>
//             <div>
//               <div></div>
//               <input
//                 id="silver"
//                 type="number"
//                 min="0"
//                 max="100"
//                 value={silver}
//                 onChange={(e) => setSilver(e.target.value)}
//               />
//               <div className="value">{silver}</div>
//             </div>
//             <div>
//               <div></div>
//               <input
//                 id="bronze"
//                 type="number"
//                 min="0"
//                 max="100"
//                 value={bronze}
//                 onChange={(e) => setBronze(e.target.value)}
//               />
//               <div className="value">{bronze}</div>
//             </div>
//             <div>
//               <input
//                 id="text"
//                 type="text"
//                 placeholder="new country"
//                 maxLength="50"
//                 autoCapitalize="off"
//                 autoComplete="off"
//                 autoCorrect="off"
//                 autoFocus
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onFocus={(e) => e.target.select()}
//               />
//             </div>
//             <div>
//               <button
//                 disabled={text.trim().length === 0}
//                 type="submit"
//                 id="save"
//               >
//                 save
//               </button>
//             </div>
//             <div>
//               <button id="cancel" type="button" onClick={hideDialog}>
//                 cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       ) : (
//         <img
//           src={trigger}
//           alt="New Country"
//           onClick={() => setShowDialog(true)}
//         />
//       )}
//     </>
//   );
// }