import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <div className="bg-stone-50">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <div className="bg-stone-50">
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayouts;
