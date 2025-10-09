import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={` min-h-[calc(100vh-116px)]
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
        <RingLoader size={100} color="#632ee3"></RingLoader>
    </div>
  );
};

export default Loader;
