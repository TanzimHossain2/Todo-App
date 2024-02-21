import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import {added, allCompleted, clearCompleted } from "../redux/todos/actions";
import { useDispatch } from "react-redux";


const Header = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  }

  const completeAll = () => {
    dispatch(allCompleted());
  }

  const clearAll = () => {
    dispatch(clearCompleted());
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
          <img src={noteImage} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={input}
            onChange={handleInput}
          />
          <button
            type="submit"
            style={{ backgroundImage: `url(${plusImage})` }}
            className={`appearance-none w-8 h-8 bg-no-repeat bg-contain`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img className="w-4 h-4" src={tickImage} alt="Complete" />
            <span onClick={completeAll}>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer" onClick={clearAll}>Clear completed</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
