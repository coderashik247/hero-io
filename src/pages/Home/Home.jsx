import React from "react";
import Banner from "../../components/Banner/Banner";
import StatesSection from "../../components/StatesSection/StatesSection";
import { useLoaderData, useNavigate } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import { IoMdTrendingUp } from "react-icons/io";
import Container from "../../components/Container/Container";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Home = () => {
  const appsData = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <Banner></Banner>
      <StatesSection></StatesSection>

      <div className="text-center mt-15">
        <h2 className="text-5xl font-bold flex justify-center items-center text-stone-700">
          Trending Apps <IoMdTrendingUp color="#9f62f2" size={65} />
        </h2>
        <p className="text-xl text-[#627382] pb-8 mt-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <Container>
          <div className="grid grid-cols-4 gap-6 pb-10">
            {appsData.slice(0, 8).map((app) => (
              <AppCard app={app}></AppCard>
            ))}
          </div>
          <div className="pb-10 flex justify-center items-center">
            <button 
            onClick={() => navigate('/apps')}
              style={{
                background:
                  "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
              }}
              className="px-6 py-2 text-white font-semibold rounded-xl hover:scale-110 hover:cursor-pointer flex justify-center items-center gap-2"
            >
              See More <FaArrowRightToBracket size={20} />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
