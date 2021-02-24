import React from "react";
import "./App.css";
import Mint from "./components/Mint";
import ViewBadge from "./components/ViewBadge";
import Pinata from "./components/Pinata";

function App() {
  return (
    <div className="App">
      <h1>Badges Module</h1>
      <Mint />
      <ViewBadge />
      <hr/>
      <h1>Upload and pin to Pinata</h1>
      <Pinata />
    </div>
  );
}

export default App;
