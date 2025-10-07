import { IoIosHome } from "react-icons/io";
import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";
import logoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex justify-center items-center gap-1 ${
                    isActive
                      ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                      : "text-xl"
                  }`
                }
              >
                <IoIosHome /> Home
              </NavLink>
              <NavLink
                to="apps"
                className={({ isActive }) =>
                  `flex justify-center items-center gap-1 ${
                    isActive
                      ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                      : "text-xl"
                  }`
                }
              >
                <FaAppStore /> Apps
              </NavLink>
              <NavLink
                to="installation"
                className={({ isActive }) =>
                  `flex justify-center items-center gap-1 ${
                    isActive
                      ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                      : "text-xl"
                  }`
                }
              >
                <MdOutlineInstallDesktop /> Installation
              </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost font-bold text-base lg:text-3xl flex justify-center items-center p-0 lg:">
           <img src={logoImg} alt="" className="h-5 w-5 lg:h-10 lg:w-10" /> Hero IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive
                    ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                    : "text-xl"
                }`
              }
            >
              <IoIosHome /> Home
            </NavLink>
            <NavLink
              to="apps"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive
                    ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                    : "text-xl"
                }`
              }
            >
              <FaAppStore /> Apps
            </NavLink>
            <NavLink
              to="installation"
              className={({ isActive }) =>
                `flex justify-center items-center gap-1 ${
                  isActive
                    ? "text-purple-600 font-semibold text-xl border-b-2 border-purple-900"
                    : "text-xl"
                }`
              }
            >
              <MdOutlineInstallDesktop /> Installation
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'https://github.com/coderashik247'}
          target="_blank"
            style={{
              background:
                "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
            }}
            className="py-1 px-2 lg:px-6 text-lg text-white font-semibold border rounded-lg flex justify-center items-center gap-2"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
