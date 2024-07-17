import React from "react";
import D from "./D";
const cStyles = {
  width: "300px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "30px",
  margin: "20px auto",
  height: "470px",
};
function C(props) {
  console.log("Cto D", props.data);
  return (
    <div style={cStyles}>
      <h4>C component</h4>
      <D data={props.data} />
    </div>
  );
}

export default C;
