/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Switch, Route, Link, withRouter } from "react-router-dom";
// import Mint from "./components/Mint";
// import ViewBadge from "./components/ViewBadge";
import CreateBadge from "./pages/CreateBadge/CreateBadge";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch >
        <div className="app-body">
          {/* <h1>Badges Module</h1> */}
          {/* <Mint />
        <ViewBadge /> */}
          <Route path="/createbadge" render={routerProps => <CreateBadge routerProps={routerProps} />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
