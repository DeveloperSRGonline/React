import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../Component/RecipeCard';

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  // har recipe ke liye RecipeCard bana rahe hain
  const renderRecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  // sare RecipeCard ko flex wrap ke sath show kar rahe hain
  return (
    <div className="flex flex-wrap">
      {favourite.length > 0 ? renderRecipes : "No favourite found"}
    </div>
  );
}

export default Fav