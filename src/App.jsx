import "./App.css";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Electronics from "./components/products/categories/electronics/Electronics";
import Jewellery from "./components/products/categories/jewellery/Jewellery";
import Mens from "./components/products/categories/men'sclothing/Mens";
import Womens from "./components/products/categories/women'sclothing/Womens";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import AllProducts from "./components/allproducts/AllProducts";
import Usernames from "./components/user-names/Usernames";
import A from "./components/parent-child/A";
function App() {
  return (
    <div className="app">
      <h2>App component</h2>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<A />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />}></Route>
          <Route path={"jewellery"} element={<Jewellery />}></Route>
          <Route path={"mens"} element={<Mens />}></Route>
          <Route path={"womens"} element={<Womens />}></Route>
        </Route>
        <Route path={"/imagecomp"} element={<ImageComp />}></Route>
        <Route path={"/counter"} element={<Counter />}></Route>
        <Route path={"/allproducts"} element={<AllProducts />}></Route>
        <Route path={"/usernames"} element={<Usernames />}></Route>
        <Route path={"*"} element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
