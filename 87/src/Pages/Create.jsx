// nanoid aur react ke hooks import kar rahe hain
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create component banaya
const Create = () => {
  const navigate = useNavigate();
  // context se data aur setdata le rahe hain
  const { data, setdata } = useContext(recipecontext);
  // react-hook-form se register, handleSubmit, reset le rahe hain
  const { register, handleSubmit, reset } = useForm();

  // form submit hone par ye function chalega
  const submitHandler = (recipe) => {
    // har recipe ko unique id de rahe hain
    recipe.id = nanoid();

    // data ka ek copy bana ke usme nayi recipe add kar rahe hain
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    toast.success("Recipe added successfully!");
    // form reset kar rahe hain
    reset();
    navigate("/recipes");
  };

  // form ka UI return kar rahe hain
  return (
    <form
      // form submit hone par submitHandler chalega
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-centerpy-10 px-10 mt-10 h-[90%] w-[50%] mx-auto bg-[#0d2c1f] rounded-2xl text-white p-4"
    >
      {/* Heading dikhane ke liye */}
      <h1 className="text-4xl text-[#afff59] font-bold text-center mb-5">
        Create Recipe
      </h1>
      {/* Image URL input field */}
      <input
        className="border-b-[#9ceaef] mx-auto w-[90%] block font-medium text-amber-50 outline-0 border-b-1 text-xl rounded p-2 "
        {...register("image")}
        type="url"
        placeholder="Image URL goes here"
      />
      <small className="text-red-400 pl-8">.</small>
      {/* Recipe title input field */}
      <input
        className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("title")}
        type="text"
        placeholder="Recipe title goes here"
      />
      <small className="text-red-400 pl-8">.</small>
      {/* Description textarea */}
      <textarea
        className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("desc")}
        placeholder="description goes here"
      ></textarea>
      <small className="text-red-400 pl-8">.</small>
      {/* Ingredients textarea */}
      <textarea
        className="border-b-[#9ceaef] block text-amber-50 font-medium  outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("ing")}
        placeholder="write ingredients seperated by commas"
      ></textarea>
      <small className="text-red-400 pl-8">.</small>
      {/* Instructions textarea */}
      <textarea
        className="border-b-[#9ceaef] block text-amber-50 font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("inst")}
        placeholder="write instructions for making the recipe"
      ></textarea>
      {/* Category select dropdown */}
      <select
        className="border-b-[#9ceaef] block text-amber-50 bg-[#1b4332] font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("cat")}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="Super">Super</option>
      </select>
      <small className="text-red-400 pl-8">.</small>
      <br />
      {/* Save Recipe button */}
      <button className="bg-[#f94144] text-white px-16 py-4 font-bold text-2xl rounded mb-5 w-[90%] mx-auto active:scale-[0.97] duration-200">
        Save Recipe
      </button>
    </form>
  );
};

// component ko export kar rahe hain
export default Create;
