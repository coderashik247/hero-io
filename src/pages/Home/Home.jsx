import React from "react";
import Banner from "../../components/Banner/Banner";
import StatesSection from "../../components/StatesSection/StatesSection";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import { IoMdTrendingUp } from "react-icons/io";
import Container from "../../components/Container/Container";

const Home = () => {
  const appsData = useLoaderData();
  console.log(appsData);
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
          <div className="grid grid-cols-4 gap-6 pb-20">
            {appsData.map((app) => (
              <AppCard app={app}></AppCard>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
