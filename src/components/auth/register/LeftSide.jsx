import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerWithEmailAndPassword } from "../../../firebase";

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
      await registerWithEmailAndPassword(email, password);
      toast.success("Account created successfully",{
        autoClose: 1500
      });

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use");
      } else {
        toast.error("An error occurred while creating account");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center p-8 md:p-14">
      <span className="mb-3 text-4xl font-bold">Welcome to Todo Redux</span>
      <span className="font-light text-gray-400 mb-8">
        Create a new account
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4">
          <span className="mb-2 text-md">Name</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
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
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          Sign up
        </button>
        <div className="text-center text-gray-400">
          Already have an account?
          <span className="font-bold text-black">
            <NavLink to="/login" className="text-blue-500">
              Login
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;
