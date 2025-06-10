import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Component/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return <div className="flex flex-wrap">{renderRecipes}</div>;
};

export default Recipes;
