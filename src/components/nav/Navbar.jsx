import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function nav() {
  return (
    <div className="nav">
      <div className="leftPanel flexContainer">
        <h2>React Routing</h2>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/imagecomp">ImageComp</Link>
        <Link to="/allproducts">AllProducts</Link>
      </div>
    </div>
  );
}

export default nav;
