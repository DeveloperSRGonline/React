import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">{recipe.title}</h3>
      <p className="text-gray-500 text-sm">{recipe.calories}</p>
      <Link to={`/recipe/${recipe.id}`}>
        <button className="mt-3 px-4 py-2 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-500">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
