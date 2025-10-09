import { useLoaderData, useNavigate, useNavigation } from "react-router";
import Container from "../../components/Container/Container";
import AppCard from "../../components/AppCard/AppCard";
import { VscVscodeInsiders } from "react-icons/vsc";
import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Loader from "../../components/Loader/Loader";

const Apps = () => {
  const appsData = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const [searchItem, setSearchItem] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);

    // simulate loader delay
    setTimeout(() => {
      const results = appsData.filter((app) =>
        app.subtitle.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredApps(results);
      setLoading(false);
    }, 500); // 0.5 sec loader
  };

  // Navigation loader (page change)
  if (navigation.state === "loading" || loading) return <Loader />;

  return (
    <Container>
      <div>
        <h2 className="text-5xl pt-15 font-bold flex justify-center items-center text-stone-700 gap-3">
          Our All Applications <VscVscodeInsiders color="#632ee3" size={55} />
        </h2>
        <p className="text-xl text-center text-[#627382] pb-4 mt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center ">
        <p className="text-xl font-semibold text-gray-700">
          ({filteredApps.length}) App Found
        </p>

        <form onSubmit={handleSearch} className="relative w-72">
          <HiMiniMagnifyingGlass
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search Apps"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>
      </div>

      <div className="grid grid-cols-4 gap-6 py-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => <AppCard key={index} app={app} />)
        ) : (
          <div className="flex justify-center items-center flex-col col-span-4">
            <h2 className="pt-20 text-6xl text-gray-500 font-bold my-10">
              No Apps Found
            </h2>
            <div className="pb-10 flex justify-center items-center">
              <button
                onClick={() => navigate("/")}
                style={{
                  background:
                    "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
                }}
                className="px-6 py-2 text-white font-semibold rounded-xl hover:scale-110 hover:cursor-pointer flex justify-center items-center gap-2"
              >
                See More <FaArrowRightToBracket size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Apps;
