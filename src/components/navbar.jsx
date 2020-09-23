import React from "react";

export const NavBar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <div className="navbar-brand" href="#">
      Total Button Active{" "}
      <span className="badge bagde-pill badge-secondary">{totalCounters}</span>
    </div>
  </nav>
);