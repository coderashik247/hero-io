import { useLoaderData } from "react-router";
import Container from "../../components/Container/Container";
import AppCard from "../../components/AppCard/AppCard";
import { VscVscodeInsiders } from "react-icons/vsc";
import { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Apps = () => {
  const appsData = useLoaderData();
  const [searchItem, setSearchItem] = useState("");

  const filterApps = appsData.filter((app) =>
    app.subtitle.toLowerCase().includes(searchItem.toLocaleLowerCase())
  );
  console.log(appsData);
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
         ({filterApps.length}) App Found
        </p>

        <div className="relative w-72">
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
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 py-10">
        {
            filterApps.length > 0 ? (filterApps.map((app,index) => <AppCard key={index} app={app}></AppCard>)) : (<p>No data found</p>)
        }
      </div>
    </Container>
  );
};

export default Apps;
