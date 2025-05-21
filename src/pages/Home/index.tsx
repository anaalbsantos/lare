import { Background, Bed, Sofa } from "../../assets";
import { NavBar, Product } from "../../components";

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
      <div className="flex flex-col p-4 gap-2">
        <p className="font-bold text-2xl lg:text-4xl text-dark text-center">
          nossos produtos
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          <Product
            title="Cama Box Com Colchão Queen"
            image={Bed}
            price={1290.9}
          />
          <Product
            title="Sofá Retrátil 3 Lugares"
            image={Sofa}
            price={1899.99}
          />
          <Product
            title="Cama Solteiro Madeira Maciça"
            image={Bed}
            price={799.5}
          />
          <Product title="Cama Casal Estofada" image={Bed} price={999.0} />
          <Product
            title="Sofá 2 Lugares Compacto"
            image={Sofa}
            price={1290.0}
          />
          <Product title="Sofá Canto Modular" image={Sofa} price={2490.0} />
          <Product title="Sofá Chaise Longue" image={Sofa} price={2090.0} />
        </div>
      </div>
    </div>
  );
};

export default Home;
