import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const [showForm, setshowForm] = useState(false);
  const Navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit } = useForm();

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    // Parse ing and inst from comma-separated string to array
    copydata[index] = {
      ...copydata[index],
      ...recipe,
      ing: recipe.ing.split(",").map((i) => i.trim()),
      inst: recipe.inst.split(",").map((i) => i.trim()),
    };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated successfully!");
  };

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const DeleteHandler = () => {
    const fliterdata = data.filter((r) => r.id !== params.id);
    setdata(fliterdata);
    localStorage.setItem("recipes", JSON.stringify(fliterdata));
    toast.error("Recipe deleted successfully!");
    Navigate("/recipes");
    const filterfav = favourite.filter((f) => f.id !== recipe?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const favHandler = () => {
    const copyfav = [...favourite];
    copyfav.push(recipe);
    setfavourite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const unFavHandler = () => {
    const filterfav = favourite.filter((f) => f.id !== recipe?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  // useEffect(() => {
  //   console.log("SingleRecipe.jsx mounted");

  //   return () => {
  //     console.log("SingleRecipe.jsx unmounted");
  //   };
  // }, [favourite]);
  // [] - ye rerendering ko rokta hai // ya fir ise dependencie array bhi bolte hain

  return recipe ? (
    <div className="p-10 flex">
      <div className="w-1/2 ">
        <h1 className="text-5xl font-bold text-amber-200 ">
          {"- " + recipe.title}
        </h1>
        <img
          className="w-120 h-70 object-cover mt-10 mb-5  rounded-2xl border-2"
          src={recipe.image}
          alt=""
        />
        <div className="flex flex-col items-start justify-center">
          <div className="mt-10">
            <h2 className="text-4xl font-bold mb-3">Ingredients :-</h2>
            <ul className="list-disc pl-5">
              {Array.isArray(recipe.ing) &&
                recipe.ing.map((ing, index) => (
                  <li key={index} className="text-2xl text-amber-100">
                    {ing}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-4xl font-bold mb-3 mt-5">Instructions :-</h2>
            <ol className="list-decimal pl-5">
              {Array.isArray(recipe?.inst) &&
                recipe.inst.map((inst, index) => (
                  <li key={index} className="text-2xl text-amber-100">
                    {inst}
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-4xl font-bold mb-3 mt-5">Description :-</h2>
          <p className="text-2xl text-amber-100">{recipe.desc}</p>
        </div>
        <div className="flex items-center justify-start my-7">
          <h2 className="text-3xl font-bold my-3 ">Category :-</h2>
          <span className="text-4xl text-amber-200 m-3 capitalize font-extrabold">
            {recipe.cat}
          </span>
        </div>
        <button
          onClick={DeleteHandler}
          className="bg-[#f94144] text-white px-10 py-4 font-bold text-xl rounded mb-5 w-[90%] mx-auto active:scale-[0.97] duration-200"
        >
          Delete Recipe
        </button>
        <button
          onClick={() => setshowForm(!showForm)}
          className="bg-[#488804] text-white px-10 py-3 font-bold text-xl rounded mb-5 w-[90%] mx-auto active:scale-[0.97] duration-200"
        >
          {showForm ? "Hide Update Form" : "Edit Recipe"}
        </button>
      </div>
      <div className="w-1/2">
        <button
          onClick={() => setshowForm(!showForm)}
          className="bg-[#488804] text-white px-10 py-3 font-bold text-xl rounded mb-5 w-[90%] mx-auto active:scale-[0.97] duration-200"
        >
          {showForm ? "Hide Update Form" : "Edit Recipe"}
        </button>
        {showForm && (
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="flex flex-col items-centerpy-10 px-10 w-[90%] mt-12 mx-auto bg-[#0d2c1f] rounded-2xl text-white p-4"
          >
            <h1 className="text-4xl text-[#afff59] font-bold text-center m-5">
              Update Recipe
            </h1>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold"
              htmlFor="img"
            >
              Img URL
            </label>
            <input
              className="border-b-[#9ceaef] mx-auto w-[90%] block font-medium text-amber-50 outline-0 border-b-1 text-xl rounded p-2 "
              {...register("image")}
              defaultValue={recipe.image}
              type="url"
              placeholder="Image URL goes here"
            />
            <small className="text-red-400 pl-8">.</small>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold"
              htmlFor="img"
            >
              Title
            </label>
            <input
              className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
              {...register("title")}
              defaultValue={recipe.title}
              id="img"
              type="text"
              placeholder="Recipe title goes here"
            />
            <small className="text-red-400 pl-8">.</small>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold"
              htmlFor="desc"
            >
              Description
            </label>
            <textarea
              id="desc"
              className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
              {...register("desc")}
              defaultValue={recipe.desc}
              placeholder="description goes here"
              rows="5"
            ></textarea>
            <small className="text-red-400 pl-8">.</small>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold"
              htmlFor="ing"
            >
              Ingredients
            </label>
            <textarea
              className="border-b-[#9ceaef] block text-amber-50 font-medium  outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
              {...register("ing")}
              defaultValue={
                Array.isArray(recipe.ing)
                  ? recipe.ing.join(", ")
                  : recipe.ing || ""
              }
              id="ing"
              placeholder="write ingredients seperated by commas"
              rows="3"
            ></textarea>
            <small className="text-red-400 pl-8">.</small>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold"
              htmlFor="inst"
            >
              Instructions
            </label>
            <textarea
              className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
              {...register("inst")}
              defaultValue={
                Array.isArray(recipe.inst)
                  ? recipe.inst.join(", ")
                  : recipe.inst || ""
              }
              id="inst"
              placeholder="write instructions for making the recipe"
              rows="5"
            ></textarea>
            <label
              className="text-2xl ml-10 text-amber-200 font-bold mt-5"
              htmlFor="cat"
            >
              Category
            </label>
            <select
              className="border-b-[#9ceaef] block text-[#d8f3dc] bg-[#1b4332] font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
              {...register("cat")}
              defaultValue={recipe.cat}
              id="cat"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="Super">Super</option>
            </select>
            <small className="text-red-400 pl-8">.</small>
            <br />
            <div className="flex items-center justify-around pr-8 mb-5">
              <button className=" bg-[#488804] text-white px-16 py-4 font-bold text-2xl rounded  w-[70%]  active:scale-[0.97] duration-200">
                Update Recipe
              </button>
              <div className="relative w-10 h-10">
                {favourite.find((f) => f.id == recipe?.id) ? (
                  <i
                    onClick={unFavHandler}
                    className="ri-heart-fill absolute text-5xl text-red-500"
                  ></i>
                ) : (
                  <i
                    onClick={favHandler}
                    className="ri-heart-line absolute text-5xl text-red-500"
                  ></i>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
