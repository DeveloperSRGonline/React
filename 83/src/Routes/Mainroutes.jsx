import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import Create from "../Pages/Create";

const Mainroutes = () => {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/recipes" element={<Recipes />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/create-recipe" element={<Create />}/>
  </Routes>;
};

export default Mainroutes;
