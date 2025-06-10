import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Component/RecipeCard";

const Recipes = () => {
  // context se data le rahe hain
  const { data } = useContext(recipecontext);

  // har recipe ke liye RecipeCard bana rahe hain
  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  // sare RecipeCard ko flex wrap ke sath show kar rahe hain
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderRecipes : "No recipies found"}
    </div>
  );
};

export default Recipes;
