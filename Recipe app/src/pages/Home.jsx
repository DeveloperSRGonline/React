import recipes from "../Data/recipes";
import RecipeCard from "../Components/RecipeCard";

const Home = () => {
  return (
    <div className="p-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wake Up Early, Eat Fresh & Healthy
        </h1>
        <p className="text-gray-600 mb-8">
          Aside from their natural good taste and great crunchy texture alongside wonderful colors and fragrances, eating a large serving of fresh.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
