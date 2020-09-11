import React from "react";
import "./App.css";
import Header from "./components/Header";
import KombuchaControl from "./components/KombuchaControl";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Header />
        <KombuchaControl />
      </main>
    </React.Fragment>
  );
}
export default App;
