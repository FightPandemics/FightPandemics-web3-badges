import React from "react";
import "./App.css";
// import Mint from "./components/Mint";
// import ViewBadge from "./components/ViewBadge";
import CreateBadge from "./pages/CreateBadge/CreateBadge";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <h1>Badges Module</h1>
      <Mint />
      <ViewBadge /> */}
      <CreateBadge />
    </div>
  );
}

export default App;
