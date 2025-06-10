import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom"; // ✅ MUST HAVE
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const LoginHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncLoginUser(user))
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="max-w-md mx-auto mt-40 bg-[#403d3993] text-white p-8 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-white">Login</h2>

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
          placeholder="********"
          className="w-full px-4 py-2 rounded-lg bg-[#2c2b28] text-white placeholder-gray-400 border border-[#5e5b55] focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all text-black font-semibold py-2 px-4 rounded-lg"
      >
        Log In
      </button>

      <p className="text-center text-sm text-gray-300">
        Don’t have an account?
        <Link to="/register" className="text-[#698cff] hover:underline ml-1">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
