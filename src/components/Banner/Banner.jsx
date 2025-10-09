import playStoreImg from '../../assets/play_store.png'
import heroImg from "../../assets/hero.png";
import Container from "../Container/Container";
import appStoreImg from '../../assets/app_store.png'
import { Link } from 'react-router';

const Banner = () => {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col">
        <h2 className="md:w-5/12 font-bold leading-10 md:leading-20 text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  text-center  text-stone-700 my-8">
          We Build <span className="text-purple-700">Productive</span> Apps{" "}
        </h2>
        <p className="text-sm md:text-xl md:w-3/5 text-justify md:text-center mb-5 text-[#627382] px-3 md:px-0">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="space-x-3.5 mb-10 mt-3 flex">
          <Link to={'https://play.google.com/store/games?hl=en_US&pli=1'} target='_blank' className="border p-1 md:p-0 md:px-4 md:py-2 border-stone-400 text-lg rounded-lg hover:bg-white hover:scale-110 flex justify-center items-center md:gap-2"><img src={playStoreImg} className="w-7" alt="" />Google Play</Link>
          <Link to={'https://www.apple.com/app-store/'}  target='_blank'className="border p-1 md:p-0 md:px-4 md:py-2 border-stone-400 rounded-lg text-lg hover:bg-white hover:scale-110 flex justify-center items-center gap-2"> <img src={appStoreImg} alt="" /> App Store</Link>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
