import TodoHeader from "./components/TodoHeader";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-full px-6 font-sans">
      <Navbar />
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
