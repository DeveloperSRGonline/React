import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetail from "./Pages/RecipeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
