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
import BadgeProfile from "./pages/Badge Profile/BadgeProfile";
import ManageBadges from "./pages/Manage Badges/ManageBadges";
import Header from "./pages/Header/Header";
import Navbar from "./pages/Header/Navbar";
import Pinata from "./pages/Pinata";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      { location.pathname === "/claimbadge" ? null : location.pathname === "/badgeprofile" ? <Navbar /> : <Header />}
      <Switch >
        <div className="app-body">
          {/* <h1>Badges Module</h1> */}
          {/* <Mint />
        <ViewBadge /> */}
          <Route path="/createbadge" render={routerProps => <CreateBadge routerProps={routerProps} />} />
          <Route path="/claimbadge" render={routerProps => <ClaimBadge routerProps={routerProps} />} />
          <Route path="/assignbadge" render={routerProps => <AssignBadge routerProps={routerProps} />} />
          <Route path="/badgeprofile" render={routerProps => <BadgeProfile routerProps={routerProps} />} />
          <Route path="/managebadges" render={routerProps => <ManageBadges routerProps={routerProps} />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
