/* eslint-disable no-unused-vars */
import { BiSolidDownArrow } from "react-icons/bi";
import Container from "../../components/Container/Container";
import { LiaDropbox } from "react-icons/lia";
import { IoIosApps } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { deleteApps } from "../../utils";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import Loader from "../../components/Loader/Loader";

const Installation = () => {
  const loaderApps = useLoaderData(); 
  const navigation = useNavigation();
  const navigate = useNavigate();

  const [installApp, setInstallApp] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // set apps data and simulate loader
    setInstallApp(loaderApps);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [loaderApps]);

  // SORTING FUNCTION
  const handleSort = (type) => {
    setSort(type);
    if (!installApp || installApp.length === 0) return;

    const sorted = [...installApp].sort((a, b) => {
      const downloadsA = parseFloat(a.downloads.replace(' M', ''));
      const downloadsB = parseFloat(b.downloads.replace(' M', ''));
      return type === "high" ? downloadsB - downloadsA : downloadsA - downloadsB;
    });

    setInstallApp(sorted);
  };

  // UNINSTALL FUNCTION
  const handleUninstall = (app) => {
    deleteApps(app);
    const updatedApps = installApp.filter((a) => a.id !== app.id);
    setInstallApp(updatedApps);
  };

  // Show loader if navigating or local loading
  if (navigation.state === "loading" || loading) return <Loader />;

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

      {/* SORTING */}
      <div className="flex justify-between items-center border-b pb-4 border-gray-400">
        <p className="text-xl font-semibold text-gray-700">
          ({installApp.length}) App Found
        </p>
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <p className="rounded-lg border px-6 py-2 flex justify-center items-center gap-2">
              Sort by Size <BiSolidDownArrow />
            </p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("high")}>High to Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("low")}>Low to High</a>
            </li>
          </ul>
        </div>
      </div>

      {/* APPS LIST */}
      {installApp.length > 0 ? (
        installApp.map((app) => (
          <div
            key={app.id}
            className="flex justify-between bg-white mt-6 py-4 px-3 rounded-lg"
          >
            <div className="flex gap-4">
              <div>
                <img className="h-[80px] w-[80px]" src={app.image} alt="" />
              </div>
              <div>
                <h2 className="text-xl">{app.subtitle}</h2>
                <div className="flex gap-2 mt-3">
                  <span className="flex items-center justify-center gap-1 text-[#026346] p-1 rounded-sm">
                    <MdOutlineFileDownload size={19} />
                    {app.downloads}
                  </span>
                  <span className="flex items-center justify-center gap-1 text-[#FF8811] p-1 rounded-sm">
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
                className="bg-[#00d390] rounded-lg font-bold text-white px-6 py-2 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-[#00d390] hover:border-[#00d390] hover:border"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center flex-col col-span-4">
          <h2 className="pt-20 text-6xl text-gray-500 font-bold my-10">
            No Apps Found
          </h2>
          <div className="pb-10 flex justify-center items-center">
            <button
              onClick={() => navigate("/apps")}
              style={{
                background:
                  "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
              }}
              className="px-6 py-2 text-white font-semibold rounded-xl hover:scale-110 hover:cursor-pointer flex justify-center items-center gap-2"
            >
              See More Apps <FaArrowRightToBracket size={20} />
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Installation;
