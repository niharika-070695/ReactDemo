import "./ImageComp.css";
import { useState } from "react";

function ImageComp() {
  var [player, setPlayer] = useState(
    "https://tse1.mm.bing.net/th?id=OIP.CGZ3mDj8VzakCl29p4U5LwHaEK&pid=Api&P=0&h=180"
  );
  var [name, setName] = useState("Lionel Messi");
  const changetoRonaldo = () => {
    setPlayer("https://wallpapercave.com/wp/wp2243768.jpg");
    setName("Christiano Ronaldo");
  };
  const changetoMessi = () => {
    setPlayer(
      "https://tse1.mm.bing.net/th?id=OIP.CGZ3mDj8VzakCl29p4U5LwHaEK&pid=Api&P=0&h=180"
    );
    setName("Lionel Messi");
  };
  return (
    <div id="ImageComp">
      <h2 style={{ color: "blue" }}>{name}</h2>
      <img src={player} width="500" height="400" />
      <br />
      <br />
      <button onClick={changetoMessi}>Messi</button>
      <button onClick={changetoRonaldo}>Ronaldo</button>
    </div>
  );
}
export default ImageComp;
