import { Background } from "../../assets";
import { NavBar } from "../../components";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="relative w-full h-fit flex justify-center items-center">
        <p className="absolute flex w-[50%] font-bold text-center text-4xl md:text-5xl lg:text-7xl">
          descubra o prazer de estar em casa.
        </p>
        <img src={Background} className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
