/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Switch, Route, Link, withRouter, useLocation } from "react-router-dom";
// import Mint from "./components/Mint";
// import ViewBadge from "./components/ViewBadge";
import CreateBadge from "./pages/CreateBadge/CreateBadge";
import ClaimBadge from "./pages/Claim Your Badge/ClaimBadge";
import AssignBadge from "./pages/Assign Badge/AssignBadge";
import Header from "./pages/Header/Header";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      { location.pathname === "/claimbadge" ? null : <Header/> }
      <Switch >
        <div className="app-body">
          {/* <h1>Badges Module</h1> */}
          {/* <Mint />
        <ViewBadge /> */}
          <Route path="/createbadge" render={routerProps => <CreateBadge routerProps={routerProps} />} />
          <Route path="/claimbadge" render={routerProps => <ClaimBadge routerProps={routerProps} />} />
          <Route path="/assignbadge" render={routerProps => <AssignBadge routerProps={routerProps} />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
