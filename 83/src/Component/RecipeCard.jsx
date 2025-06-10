import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, ing, inst, cat } = props.recipe;
  console.log(props.recipe);
  return (
    <div className="flex flex-row shrink-0 items-center justify-center m-3 mx-auto max-w-[50%] bg-[#1b4332] rounded-2xl text-white p-2">
    <Link className="flex flex-col gap-3 items-center w-70 pt-2">
      <img className="object-cover w-65 h-40 bg-[#1b4332] rounded-2xl overflow-hidden" src={image} alt="" />
      <h1 className="text-4xl px-2 font-medium">{title}</h1>
      <button className="py-3 px-7 rounded-2xl my-3 bg-[#fa4144] text-2xl font-medium active:scale-[0.95] duration-200">See More</button>
    </Link>
    </div>
  );
};

export default RecipeCard;
