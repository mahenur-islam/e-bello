import { NavLink, Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <RiMenu2Line></RiMenu2Line>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/addproduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/mycart">My Cart</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            {" "}
            <img
              src="https://i.ibb.co/qCVdbtJ/e-bello-logo.png"
              alt="Logo"
              className="max-w-xm md:w-40"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex flex-row gap-10 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addproduct">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/mycart">My Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user.displayName}</span>
              <div className="avatar">
                <div className="w-10 mx-2 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>{" "}
              <Link className="btn" onClick={handleLogOut}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
