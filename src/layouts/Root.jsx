import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../index.css'
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer className='absolute bottom-0'></Footer>
    </div>
  );
};

export default Root;
