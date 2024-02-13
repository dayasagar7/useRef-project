import { useState, useRef } from "react";

// below is using useState and useRef ::::
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// below is using useState only;;;;;

// export default function Player() {
//   const [enteredPlayerName, setEnteredPlayerName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     setSubmitted(false);
//     // the above line will perform as , when we start to chnage the name it will be refreshed and will show unknown etity till we save the new name.
//     setEnteredPlayerName(event.target.value);
//   }

//   function handleClick() {
//     setSubmitted(true);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
