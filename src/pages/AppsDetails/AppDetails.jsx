import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/download.png";
import likeImg from "../../assets/like.png";
import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const AppDetails = () => {
  const { appsId } = useParams();

  const appsData = useLoaderData();

  const singleAppData = appsData.find((app) => app.id === parseInt(appsId));

  const data = [...singleAppData.ratings].reverse();

  return (
    <Container>
      <div className="pt-10">
        <div className="grid grid-cols-4 pb-8">
          <div className="col-span-1">
            <img
              src={singleAppData.image}
              className="h-[350px] w-[350px] bg-white"
              alt=""
            />
          </div>
          <div className="col-span-3 pl-14 space-y-3">
            <h2 className="text-3xl mt-1 font-bold text-[#001931]">
              {" "}
              {singleAppData.subtitle}{" "}
            </h2>
            <p className="text-xl mb-8">
              {" "}
              Developed by{" "}
              <span className="text-[#632ee3] font-bold ">
                {" "}
                {singleAppData.companyName}{" "}
              </span>
            </p>
            <div className="border-t-2 border-gray-300 mb-5 pt-8 flex gap-16">
              <div className="text-center flex justify-center items-center">
                <div className="text-white space-y-4">
                  <div className="flex justify-center items-center flex-col">
                    <img src={downloadImg} alt="" />
                    <p className="text-sm mt-4 text-[#001931aa] font-light tracking-wider">
                      Downloads
                    </p>
                  </div>
                  <div className="mt-0">
                    <h1 className="text-3xl font-bold text-[#001931]">
                      {" "}
                      {singleAppData.downloads}{" "}
                    </h1>
                  </div>
                </div>
              </div>
              {/* Average Ratings */}
              <div className="text-center flex justify-center items-center">
                <div className="text-white space-y-4">
                  <div className="flex justify-center items-center flex-col">
                    <FaStar color="orange" size={40} />
                    <p className="text-sm mt-4 text-[#001931aa] font-light tracking-wider">
                      Average Ratings
                    </p>
                  </div>
                  <div className="mt-0">
                    <h1 className="text-3xl font-bold text-[#001931] ">
                      {singleAppData.ratingAvg}
                    </h1>
                  </div>
                </div>
              </div>
              {/* Total Reviews */}
              <div className="text-center flex justify-center items-center">
                <div className="text-white space-y-4">
                  <div className="flex justify-center items-center flex-col">
                    <img src={likeImg} alt="" />
                    <p className="text-sm mt-4 text-[#001931aa] font-light tracking-wider">
                      Total Reviews
                    </p>
                  </div>
                  <div className="mt-0">
                    <h1 className="text-3xl font-bold text-[#001931]">
                      {" "}
                      {singleAppData.reviews}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#00d390] rounded-lg font-bold text-white px-6 py-3">
              Install Now ({singleAppData.size}){" "}
            </button>
          </div>
        </div>

        {/* Recharts */}
        <div className="mt-8 border-t border-b py-10 border-gray-400">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Ratings</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={70} />
                <Tooltip />
                <defs>
                  <linearGradient
                    id="ratingGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#632ee3" />
                    <stop offset="100%" stopColor="#9f62f2" />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="count"
                  fill="url(#ratingGradient)"
                  barSize={25}
                  radius={[5, 5, 5, 5]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 pb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Description</h3>
          <p className="text-[#627382] leading-8 text-lg text-justify"> {singleAppData.description} </p>
          <p className="text-[#627382] leading-8 text-lg text-justify"> {singleAppData.document} </p>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
