import React from "react";
import C from "./C";
const bStyles = {
  width: "400px",
  boxShadow: "0 0 10px red",
  textAlign: "center",
  padding: "50px",
  margin: "30px auto",
  height: "600px",
};
function B({ info }) {
  console.log("Bto C", info);
  return (
    <div style={bStyles}>
      <h3>B component</h3>
      <C data={info} />
    </div>
  );
}

export default B;
