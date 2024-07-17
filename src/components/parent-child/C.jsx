import React from "react";
const cStyles = {
  width: "200px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
  height: "100px",
};
function C(props) {
  return (
    <div style={cStyles}>
      <h4>C component</h4>
      <h5>Data:{props.data}</h5>
    </div>
  );
}

export default C;
