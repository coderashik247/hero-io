import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  const { image,  subtitle, size, ratingAvg } = app;
  return (
    <div className="bg-white p-6 rounded-lg">
      <img className="rounded-lg" src={image} alt="" />
      <div className="flex flex-col my-2">
      <h2 className="text-xl font-semibold text-[#031b329f]"> {subtitle} </h2>
      </div>

      <div className="flex justify-between">
        <span className="flex items-center justify-center gap-1 bg-[#15e3a167] text-[#026346] p-1 rounded-sm"><MdOutlineFileDownload size={18} />{size} M</span>
        <span className="flex items-center justify-center gap-1 text-[#FF8811] bg-[#FFF0E1] p-1 rounded-sm"><FaStar size={12} />{ratingAvg} </span>
      </div>
    </div>
  );
};

export default AppCard;
// Time Planner: Schedule & Tasks