import { useParams } from "react-router-dom";
import recipes from "../Data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}  
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <p className="text-gray-600">{recipe.calories}</p>
      <p className="mt-4 text-gray-500">{recipe.details}</p>
    </div>
  );  
};

export default RecipeDetail;
