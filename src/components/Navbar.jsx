import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import userDefaultImg from "../assets/user.png";
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
  // const { toggleTheme } = useTheme()
  const { logOut, user, theme, toggleTheme } = useContext(AuthContext);

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
    <nav className="navbar bg-base-100 sticky top-0 z-50 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost xl:hidden">
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
            <li className="md:hidden">
              <div>
                {user && Object.keys(user).length > 0 ? (
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={user?.photoURL || userDefaultImg}
                          alt={user && user?.displayName}
                        />
                      </div>
                    </div>
                    <button className="font-bold mr-2 max-md:hidden">
                      {user?.displayName
                        ? user.displayName.length > 10
                          ? user.displayName.slice(0, 6) + "..."
                          : user.displayName
                        : user?.email?.split("@")[0] &&
                          user.email.split("@")[0] > 10
                        ? user.email.split("@")[0].slice(0, 5) + "..."
                        : user.email.split("@")[0]}
                    </button>
                    <button onClick={logOut} className="btn">
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link to="/SignIn" className="btn bg-transparent border-0">
                    <TbUserExclamation className="text-2xl" />
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </div>
        <a href="./" className="btn bg-transparent border-0">
          <img width="60em" src={logo} alt="logo" />
          <span className="max-md:hidden normal-case font-montserrat text-4xl">
            Mahogany
          </span>
        </a>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="max-md:hidden">
          {user && Object.keys(user).length > 0 ? (
            <div className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-8 h-8 rounded-full">
                  <img
                    src={user?.photoURL || userDefaultImg}
                    alt={user && user?.displayName}
                  />
                </div>
              </div>
              <button className="font-bold mr-2 max-md:hidden">
                {user?.displayName
                  ? user.displayName.length > 10
                    ? user.displayName.slice(0, 6) + "..."
                    : user.displayName
                  : user?.email?.split("@")[0] && user.email.split("@")[0] > 10
                  ? user.email.split("@")[0].slice(0, 5) + "..."
                  : user.email.split("@")[0]}
              </button>
              <button onClick={logOut} className="btn">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/SignIn" className="btn bg-transparent border-0">
              <TbUserExclamation className="text-2xl" />
            </Link>
          )}
        </div>
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
