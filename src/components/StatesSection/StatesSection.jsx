import React from "react";
import { FaGooglePlay, FaStar } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";

const StatesSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
      }}
      className="flex justify-center items-center flex-col py-10 md:py-20"
    >
      <h2 className="text-3xl 2xl:text-5xl text-center font-bold mb-5 md:mb-10 text-white">Trusted by Millions, Built for You</h2>
      <div className="grid grid-cols-1 space-y-8 2xl:space-y-10 md:grid-cols-3 md:gap-[120px]">
        <div className="text-center gap-5 flex justify-center items-center">
          <div className="text-white space-y-2">
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                Total Downloads
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-7xl font-bold">29.6M</h1>
            </div>
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                21% more than last month
              </p>
            </div>
          </div>
          <IoDownloadSharp color="white" size={60} />
        </div>
        <div className="text-center gap-5 flex justify-center items-center">
          <div className="text-white space-y-2">
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                Total Reviews
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-7xl font-bold">906K</h1>
            </div>
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                46% more than last month
              </p>
            </div>
          </div>
          <FaStar color="white" size={60} />
        </div>
        <div className="text-center gap-5 flex justify-center items-center mb-10">
          <div className="text-white space-y-2">
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                Active Apps
              </p>
            </div>
            <div>
              <h1 className="text-4xl md:text-7xl font-bold">132+</h1>
            </div>
            <div>
              <p className="text-sm md:text-base font-light tracking-widest">
                31 more will Launch
              </p>
            </div>
          </div>
          <FaGooglePlay color="white"  size={60} />
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
