import React from "react";
import E from "./E";
const dStyles = {
  width: "200px",
  boxShadow: "0 0 10px orange",
  textAlign: "center",
  padding: "20px",
  margin: "20px auto",
  height: "300px",
};

function D(props) {
  console.log("D to E", props.data);
  return (
    <div style={dStyles}>
      <h5>D component</h5>
      <E data={props.data} />
    </div>
  );
}

export default D;
