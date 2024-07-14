import React from "react";
import "./Products.css";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
      <h1>Products Component</h1>
      <div className="productsContainer">
        <div className="linksContainer">
          Links
          <Link
            to="electronics"
            style={{ color: "white", textDecoration: "none", fontSize: "30px" }}
          >
            Electronics
          </Link>
          <Link
            to="jewellery"
            style={{ color: "white", textDecoration: "none", fontSize: "30px" }}
          >
            Jewellery
          </Link>
          <Link
            to="mens"
            style={{ color: "white", textDecoration: "none", fontSize: "30px" }}
          >
            Men's clothing
          </Link>
          <Link
            to="womens"
            style={{ color: "white", textDecoration: "none", fontSize: "30px" }}
          >
            Women's clothing
          </Link>
        </div>
        <div className="componentsContainer">
          <Outlet />
        </div>
      </div>
      {/* <p>
        In React, hooks are special functions that allow you to use state and
        other React features in functional components. They were introduced in
        React 16.8 to enable developers to use state and lifecycle methods in
        functional components, which were previously only available in class
        components.
      </p> */}
    </div>
  );
}

export default Products;
