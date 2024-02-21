import PropsType from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="font-bold text-xl">
                Todo Redux
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onLogout}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              Logout
            </button>

            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onLogout: PropsType.func.isRequired,
};

export default Navbar;
