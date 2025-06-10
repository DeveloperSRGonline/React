import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const Navigate = useNavigate()
    const params = useParams()
    console.log(params)
  return (
    <div className="px-20 py-5 ">
      <h1 className="text-4xl font-thin mb-3">{params.name}</h1>
      <h2 className="text-2xl font-thin mb-5">Product Detail...</h2>
      <button 
        onClick={()=> Navigate(-1)}
        className="bg-pink-600 px-10 py-1.5 rounded-3xl"
      >
        Go back
      </button>
    </div>
  );
};

export default ProductDetails;
