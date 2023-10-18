import { Link, NavLink } from "react-router-dom";
import {
  TbUserExclamation,
  TbShoppingCart,
  //  TbSearch
} from "react-icons/tb";
import {
  MdDarkMode,
  MdOutlineDarkMode,
  // MdFavoriteBorder,
  // MdFavorite,
} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AuthContext);

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/signIn">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/signUp">Sign Up</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 relative z-50 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
        <a
          href="./"
          className="btn bg-transparent border-0 normal-case font-montserrat text-4xl">
          <img width="60em" src="./src/assets/images/logo.svg" alt="logo" />
          Mahogany
        </a>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-transparent border-0">
          <TbUserExclamation />
        </Link>
        {/* <Link className="btn bg-transparent border-0">
          <TbSearch />
        </Link>
        <Link className="btn bg-transparent border-0">
          {favorite ? (
            <MdFavorite onClick={() => setFavorite(!favorite)} />
          ) : (
            <MdFavoriteBorder onClick={() => setFavorite(!favorite)} />
          )}
        </Link> */}
        <button className="btn bg-transparent border-0">
          {theme ? (
            <MdOutlineDarkMode onClick={toggleTheme} />
          ) : (
            <MdDarkMode onClick={toggleTheme} />
          )}
        </button>
        <Link to="/cart" className="btn bg-transparent border-0">
          <TbShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
