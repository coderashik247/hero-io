import { useNavigation } from "react-router";
import Loader from "../Loader/Loader";

const GlobalLoader = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="fixed inset-0 bg-white/80 flex justify-center items-center z-[9999]">
        <Loader></Loader>
      </div>
    );
  }
  return null;
};

export default GlobalLoader;
