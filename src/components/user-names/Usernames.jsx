import React from "react";
import { useState } from "react";

function Usernames() {
  let [names, setNames] = useState(["Raj", "Rohan", "Riya", "Sneha"]);
  return (
    <div style={{ padding: "10px" }}>
      <h2>UserNames</h2>
      <ul>
        {names.map(function (name) {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Usernames;
