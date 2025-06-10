import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  const NavigateHandler = (name) => {
     navigate(`/product/detail/${name}`)
  }

  return (
    <div className="flex gap-5 px-20 py-5 ">
      <h1 className="text-5xl font-bold m-5">Products</h1>
      <div className="m-10 flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-thin mb-3">Product-1</h1>
        <button onClick={()=>NavigateHandler("product 1")} className="bg-pink-600 px-10 py-1.5 rounded-3xl">
          See Detalis
        </button>
      </div>
      <div className="m-10 flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-thin mb-3">Product-2</h1>
        <button onClick={()=>NavigateHandler("product 2")} className="bg-pink-600 px-10 py-1.5 rounded-3xl">
          See Detalis
        </button>
      </div>
      <div className="m-10 flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-thin mb-3">Product-3</h1>
        <button onClick={()=>NavigateHandler("product 3")} className="bg-pink-600 px-10 py-1.5 rounded-3xl">
          See Detalis
        </button>
      </div>
      <div className="m-10 flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-thin mb-3">Product-4</h1>
        <button onClick={()=>NavigateHandler("product 4")} className="bg-pink-600 px-10 py-1.5 rounded-3xl">
          See Detalis
        </button>
      </div>
    </div>
  );
};

export default Product;
