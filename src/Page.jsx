import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HeroSection from "./components/Header/HeroSection";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Todos/Footer";
import TodoFooter from "./components/Todos/TodoFooter";
import TodoHeader from "./components/Todos/TodoHeader";
import TodoList from "./components/Todos/TodoList";
import { auth, signOut } from "./firebase";

const Page = () => {
  const navigation = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("You have been logged out successfully", {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigation("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="grid place-items-center bg-blue-100 h-full px-6 font-sans">
      <Navbar onLogout={handleLogout} />
      <HeroSection />
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <TodoHeader />
        <hr className="mt-4" />
        <TodoList />
        <hr className="mt-4" />
        <TodoFooter />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
