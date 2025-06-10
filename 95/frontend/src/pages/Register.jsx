import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const RegisterHandler = (user) => {
    user.id = nanoid();
    reset(); // Clear form after submit
    user.isAdmin = false
    dispatch(asyncRegisterUser(user))
    navigate("/login")
  };

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="max-w-md mx-auto mt-20 bg-[#403d3993] text-white p-8 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-white">Register</h2>

      <div className="space-y-4">
        <input
          {...register("username")}
          type="text"
          placeholder="Enter username"
          className="w-full px-4 py-2 rounded-lg bg-[#2c2b28] text-white placeholder-gray-400 border border-[#5e5b55] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-2 rounded-lg bg-[#2c2b28] text-white placeholder-gray-400 border border-[#5e5b55] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 rounded-lg bg-[#2c2b28] text-white placeholder-gray-400 border border-[#5e5b55] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="w-full px-4 py-2 rounded-lg bg-[#2c2b28] text-white placeholder-gray-400 border border-[#5e5b55] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold py-2 px-4 rounded-lg"
      >
        Register
      </button>

      <p className="text-center text-sm text-gray-300">
        Already have an account?
        <Link to="/login" className="text-[#698cff] hover:underline ml-1">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default Register;
