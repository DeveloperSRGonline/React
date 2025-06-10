import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const Navigate = useNavigate()
  return (
    <div className=" py-5 ">
      <h1 className="text-4xl font-thin mb-3">More services</h1>
      <h2 className="text-2xl font-thin mb-5">choose us...</h2>
      <button 
        onClick={()=> Navigate(-1)}
        className="bg-pink-600 px-10 py-1.5 rounded-3xl"
      >
        Go back
      </button>
    </div>
  );
};

export default ServiceDetails;
