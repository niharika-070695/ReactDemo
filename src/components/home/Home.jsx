import React from "react";

function Home() {
  return (
    <div style={{ color: "green", padding: "50px" }}>
      <h2>Home components</h2>
      <p>
        useRef is a hook that provides a way to create a reference to a DOM
        element or a mutable object that persists across renders. This hook is
        commonly used for directly accessing and manipulating DOM elements,
        keeping a reference to a value that does not trigger re-renders when
        changed, or storing a mutable object that needs to maintain its value
        over the component's lifecycle.
      </p>
    </div>
  );
}

export default Home;
