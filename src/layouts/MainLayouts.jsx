import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader";
import GlobalLoader from "../components/GlobalLoader/GlobalLoader";

const MainLayouts = () => {
  return (
    <>
      <div className="bg-stone-50">
        <Navbar></Navbar>
      </div>
        <GlobalLoader></GlobalLoader>
      <div className="min-h-[calc(100vh-150px)] bg-[#d2d2d296]">
        <Outlet></Outlet>
      </div>
      <div className="bg-stone-50">
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayouts;
