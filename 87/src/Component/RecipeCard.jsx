import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  // props se recipe ka data destructure kar rahe hain
  const { id, image, title, desc, ing, inst, cat } = props.recipe;
  console.log(props.recipe);
  return (
    // Card ka main container, styling ke sath
    <div className="hover:scale-102 duration-200 flex flex-row shrink-0 items-center justify-center m-3 mx-auto max-w-[50%] bg-[#0d2c1f] rounded-2xl text-white p-1 mt-10">
      {/* Link component use kiya hai, taki card pe click karne par dusre page pe ja sake */}
      <Link to={`/recipes/details/${id}`} className="flex flex-col gap-3 items-center w-70 pt-2">
        {/* Recipe ki image show kar rahe hain */}
        <img className="object-cover w-65 h-40 bg-[#1b4332] rounded-2xl overflow-hidden" src={image} alt="" />
        {/* Recipe ka title yahan show ho raha hai */}
        <h1 className="text-2xl px-2 font-medium">{title}</h1>
        {/* See More button, jisse user aur details dekh sake */}
        <button className="py-2 px-5 rounded-2xl mb-2 bg-[#fa4144] font-medium active:scale-[0.95] duration-200">See More</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
