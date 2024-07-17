import React from "react";
const eStyles = {
  width: "120px",
  boxShadow: "0 0 10px pink",
  textAlign: "center",
  padding: "20px",
  margin: "20px auto",
  height: "150px",
};
function E(props) {
  console.log("D to E", props.data);
  return (
    <div style={eStyles}>
      <h6>E component</h6>
      <h5>Data:{props.data}</h5>
    </div>
  );
}

export default E;
