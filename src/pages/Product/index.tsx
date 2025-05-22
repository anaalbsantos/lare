import { Bed } from "../../assets";
import { NavBar, Button, Quantity } from "../../components";

const Product = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col items-center lg:items-start lg:flex-row py-10 px-40 gap-10 text-dark">
        <div className="w-[60%] overflow-hidden flex items-center justify-center bg-gray-100 rounded-md">
          <img
            src={Bed}
            alt="Cama"
            className="relative object-cover max-h-[400px] w-full object-center md:max-h-[500px] 2xl:max-h-[550px] rounded-xl cursor-grab transition-opacity duration-500 delay-200 aspect-square "
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-2xl">Cama Box Com Colchão Queen</p>
            <p className="text-xl">R$ 1239,90</p>
          </div>
          <p className="text-[#8a8a8a]">
            Cama box queen size com colchão incluso, estrutura reforçada e
            tecido de alta qualidade. Ideal para garantir conforto e
            durabilidade ao seu quarto.
          </p>
          <div>
            <p>Quantidade</p>
            <Quantity />
          </div>
          <Button label="Adicionar ao carrinho" />
        </div>
      </div>
    </div>
  );
};

export default Product;
