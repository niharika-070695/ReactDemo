import "./App.css";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
function App() {
  return (
    <div className="app">
      <h2>App component</h2>
      <ImageComp />
      {/* <Header /> */}
      <Counter />
    </div>
  );
}

export default App;
