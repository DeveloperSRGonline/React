import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const {data ,setdata} = useContext(recipecontext)
  const { register, handleSubmit ,reset} = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid()

    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    // setdata([...data,recipe])
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-centerpy-10 px-10 my-10 h-[90%] w-[50%] mx-auto bg-[#1b4332] rounded-2xl text-white p-4"
    >
      <h1 className="text-4xl text-[#d8f3dc] font-bold text-center mb-5">
        Create Recipe
      </h1>
      <input
        className="border-b-[#9ceaef] mx-auto w-[90%] block font-medium text-[#d8f3dc] outline-0 border-b-1 text-xl rounded p-2 "
        {...register("image")}
        type="url"
        placeholder="Image URL goes here"
      />
      <small className="text-red-400 pl-8">.</small>
      <input
        className="border-b-[#9ceaef] block text-white font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("title")}
        type="text"
        placeholder="Recipe title goes here"
      />
      <small className="text-red-400 pl-8">.</small>
      <textarea
        className="border-b-[#9ceaef] block text-white font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("desc")}
        placeholder="description goes here"
      ></textarea>
      <small className="text-red-400 pl-8">.</small>
      <textarea
        className="border-b-[#9ceaef] block text-white font-medium  outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("ing")}
        placeholder="write ingredients seperated by commas"
      ></textarea>
      <small className="text-red-400 pl-8">.</small>
      <textarea
        className="border-b-[#9ceaef] block text-white font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("inst")}
        placeholder="write instructions for making the recipe"
      ></textarea>
      <select
        className="border-b-[#9ceaef] block text-[#d8f3dc] bg-[#1b4332] font-medium outline-0 border-b-1 text-xl rounded p-2 mx-auto w-[90%] mt-3"
        {...register("cat")}
      >
        <option value="breakfast">Breakfast 1</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="Super">Super</option>
      </select>
      <small className="text-red-400 pl-8">.</small>
      <br />
      <button className="bg-[#f94144] text-white px-16 py-4 font-bold text-2xl rounded mt-5 w-[90%] mx-auto active:scale-[0.97] duration-200">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
