import React from "react";
import { useState } from "react";

export default function () {
  const [names, setNames] = useState(["Teresa", "Benjamin"]); // setNames is an empty object here
  const [input, setInput] = useState("uuuuu"); // Whatever is in the parens will show up in the input field

  function handleSubmit(e) {
    //
    e.preventDefault(); //keeps the page from refreshing
    setNames([...names, input]); // use the spread operator to pass in the names already created and add new name = input
  }

  function handleChange(event) {
    //this is needed because we need to track the changes on the form and reference the value of the form input -- set the value of what is entered in the input area to 'input' sothat it can be called later in handleSubmit
    setInput(event.target.value);
  }

  function removeName(e) {
    console.log(e.target.parent);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/*onSubmit and onChange are both expecting functions*/}
        <input type="text" value={input}></input>
        <input type="submit"></input>
      </form>

      <ul>
        {names.map((name) => {
          return (
            <li key={name}>
              {name}
              <button onClick={removeName}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
