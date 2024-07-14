import "./App.css";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="app">
      <h2>App component</h2>
      <Navbar />
      <ImageComp />
      {/* <Header /> */}
      <Counter />
      <Home />
      <Products />
    </div>
  );
}

export default App;
