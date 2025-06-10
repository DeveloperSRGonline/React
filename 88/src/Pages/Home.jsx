import { use, useEffect } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const getProduct = async () => {
    try{
      // Fetching data from the fake store API
      // This API provides a list of 20 domy products
      // using fetch
      // const strdata = await fetch("https://fakestoreapi.com/products")
      // const data = await strdata.json()

      // using axios
      const response = await axios.get("/products")

      console.log(response.data)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(()=>{
      getProduct()
  },[])


  return (
    <div className="flex items-start flex-col justify-start pt-10 text-gray-300 object-cover h-full w-full">
      <h1 className="text-9xl font-medium">Your <span className="text-[300px] font-extrabold text-red-400">KITCHEN</span></h1>
      <h1 className="text-9xl font-medium">Your <span className="text-[150px] font-extrabold text-[#afff59]">RECIPES</span></h1>
      <Link className="text-4xl font-bold bg-blue-950 text-white p-5 my-5 active:scale-[0.97] duration-200 rounded" to="/recipes">Explore Recipies</Link>
    </div>
  )
}

export default Home