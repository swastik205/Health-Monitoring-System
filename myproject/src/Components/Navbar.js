import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = (props) => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate("/auth/start");
    localStorage.removeItem("token");
  };

  const onHomeClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
      alert("First Log in Yourself");
      return;
    }
    navigate("/");
  };
  return (
    <nav
      className="bg-blue-950 border-gray-200 h-16"
      style={{ maxWidth: "2500px" }}
    >
      <div className="relative flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="absolute bg-white rounded-xl left-28 top-3.5"
          style={{ width: "160px" }}
        >
          <span className="text-2xl ml-3 bg-center font-extrabold whitespace-nowrap text-blue-950">
            Wearables
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full absolute right-24 top-4 md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:max-w-screen-xl">
            <li>
              <button
                onClick={onHomeClick}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li>
              {!localStorage.getItem("token") ? (
                <Link
                  to="/auth/start"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              ) : (
                <Link
                  to="/auth/start"
                  onClick={onHandleClick}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <Link
  to="/auth/start"
  onClick={onHandleClick}
  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
>
  {location.pathname === "/" ? "Logout" : "Login"}
</Link> */
}
