import React from "react";
import B from "./B";
import { useState } from "react";
const aStyles = {
  width: "600px",
  boxShadow: "0 0 10px green",
  textAlign: "center",
  margin: "100px auto",
  padding: "50px",
  height: "900px",
};

function A() {
  let [state, setState] = useState("---");
  return (
    <div style={aStyles}>
      <h2>A component</h2>
      <button
        onClick={() => {
          setState("Niharika");
        }}
      >
        Pass Data to E
      </button>
      <B info={state} />
    </div>
  );
}

export default A;
