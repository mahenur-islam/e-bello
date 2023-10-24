import { NavLink, Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import {MdDarkMode} from 'react-icons/md'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState('light')
  function changeTheme(){
    const html =document.documentElement
    if(mode == 'light'){
      html.classList.remove('light');
      html.classList.add('dark')
      setMode('dark')
      localStorage.setItem('mode', 'dark')
    }else{
      html.classList.remove('dark');
      html.classList.add('light')
      setMode('light')
      localStorage.setItem('mode', 'light')
    }
  }

  useEffect(()=>{
    const currentMode = localStorage.getItem('mode') || 'light'
    if(currentMode){
      setMode(currentMode);
      const html =document.documentElement
      html.classList.add(currentMode);
    }
  },[])
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 p-2 dark:bg-gray-600 dark:text-white">
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
                <NavLink to="/mycart" >My Cart</NavLink>
              </li>
              <li>
                <NavLink to="/login" >Login</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            {" "}
           <h1 className="text-3xl font-serif italic font-bold">E-Bello.</h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex flex-row gap-10 px-1">
            <li>
              <NavLink to="/" className="dark:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addproduct" className="dark:text-white">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/mycart" className="dark:text-white">My Cart</NavLink>
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
        <button onClick={changeTheme} className="text-2xl ml-2"><MdDarkMode></MdDarkMode></button>
      </div>
    </div>
  );
};

export default Navbar;
