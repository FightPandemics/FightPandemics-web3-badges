import React from "react";
import "./App.css";
import Mint from "./components/Mint";
import ViewBadge from "./components/ViewBadge";

function App() {
  return (
    <div className="App">
      <h1>Badges Module</h1>
      <Mint />
      <ViewBadge />
    </div>
  );
}

export default App;
