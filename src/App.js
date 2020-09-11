import React, { useState } from "react";

import "./App.css";
import NameList from "./components/NameList";

function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  let todayString = mm + "/" + dd + "/" + yyyy;

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <main className="container">
        <h1>Hello Beautiful</h1>
        <p>{todayString}</p>
        <p>
          {today.getHours()}:{today.getMinutes()}:{today.getSeconds()}
        </p>
        <p>You clicked {count} times</p>
        <button onClick={increment}>Click me</button>
        <hr></hr>
        <NameList></NameList>
      </main>
    </div>
  );
}

export default App;
