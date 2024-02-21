import { useForm } from "react-hook-form";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../../firebase";

import { toast } from "react-toastify";

const LeftSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginWithEmailAndPassword(email, password);
      toast.success("Logged in successfully", {
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("Invalid credentials. Please try again.", {
            autoClose: 2000,
          });
          break;

        default:
          toast.error("An error occurred. Please try again later.");
          console.error("Firebase error:", error);
      }
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithGoogle();

      toast.success(`Logged in with ${provider} successfully`, {
        autoClose: 1200,
      });

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col justify-center p-8 md:p-14">
      <span className="mb-3 text-4xl font-bold">Welcome back</span>
      <span className="font-light text-gray-400 mb-8">
        Welcome back! Please enter your details
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4">
          <span className="mb-2 text-md">Email</span>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="text-red-500">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="py-4">
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 h-10"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex justify-between w-full py-4">
          <div className="mr-24">
            <input type="checkbox" name="ch" id="ch" className="mr-2" />
            <span className="text-md">Remember for 30 days</span>
          </div>
          <span className="font-bold text-md">
            <Link to="/reset" className="text-gray-800">
              Forget Password?
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Sign in
        </button>
        <button
          className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          type="button"
          onClick={() => handleSocialLogin("google")}
        >
          <img
            src="google.svg"
            alt="google img"
            className="w-6 h-6 inline mr-2"
          />
          Sign in with Google
        </button>

        <div className="text-center text-gray-400">
          Don't have an account?
          <span className="font-bold text-black">
            <NavLink to="/signup" className="text-blue-500">
              Sign up
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;
