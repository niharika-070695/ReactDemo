import React from "react";
import { useContext } from "react";
import { myHomeContext } from "./MyHomeContext";
function Details() {
  let info = useContext(myHomeContext);
  return (
    <div>
      <h2>Details component</h2>
      <h4>Data:{info}</h4>
    </div>
  );
}

export default Details;
