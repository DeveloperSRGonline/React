import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate()
  return (
    <div className="px-20 py-5">
      <h1 className="text-5xl font-thin mb-3">service</h1>
      <button
        onClick={() => navigate("/Service/detail")}
        className="bg-pink-600 px-10 py-1.5 rounded-3xl"
      >
        More Details
      </button>
      <hr  className="my-10"/>
      <Outlet />
    </div>
  );
};

export default Service;
