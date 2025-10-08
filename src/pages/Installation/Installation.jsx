import { BiSolidDownArrow } from "react-icons/bi";
import Container from "../../components/Container/Container";
import { LiaDropbox } from "react-icons/lia";
import { IoIosApps } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { deleteApps, getApps } from "../../utils";

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  useEffect(() => {
    const savedApps = getApps();
    setInstallApp(savedApps);
  }, []);

  const handleUninstall = (app) => {
    deleteApps(app);
    const savedApps = getApps();
    setInstallApp(savedApps);
  };

  return (
    <Container>
      <div>
        <h2 className="text-5xl pt-15 font-bold flex justify-center items-center text-stone-700 gap-3">
          Your Installed Apps <LiaDropbox color="#632ee3" size={55} />
        </h2>
        <p className="text-xl text-center text-[#627382] pb-4 mt-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center border-b pb-4 border-gray-400">
        <p className="text-xl font-semibold text-gray-700">({installApp.length}) App Found</p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="">
            <p className="rounded-lg border px-6 py-2 flex justify-center items-center gap-2">
              Sort by Ratings <BiSolidDownArrow />{" "}
            </p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      {installApp.map((app) => {
        return (
          <div className="flex justify-between bg-white mt-6 py-4 px-3 rounded-lg">
            <div className="flex gap-4">
              <div>
                <img className="h-[80px] w-[80px]" src={app.image} alt="" />
              </div>
              <div>
                <h2 className="text-xl"> {app.subtitle} </h2>
                <div className="flex gap-2 mt-3">
                  <span className="flex items-center justify-center gap-1  text-[#026346] p-1 rounded-sm">
                    <MdOutlineFileDownload size={19} />
                    {app.downloads}
                  </span>
                  <span className="flex items-center justify-center gap-1 text-[#FF8811]  p-1 rounded-sm">
                    <FaStar size={14} />
                    {app.ratingAvg}
                  </span>
                  <span className="flex items-center justify-center gap-1 text-gray-600 p-1 rounded-sm">
                    <IoIosApps size={16} />
                    {app.size}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                onClick={() => handleUninstall(app)}
                className=" bg-[#00d390] rounded-lg font-bold text-white px-6 py-2 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-[#00d390] hover:border-[#00d390]  hover:border"
              >
                Uninstall{" "}
              </button>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Installation;
