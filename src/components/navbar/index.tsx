import { LareLogo } from "../../assets";
import { ShoppingCart, Search } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between h-16 text-black py-4 px-8">
      <div className="flex flex-row gap-1">
        <img src={LareLogo} alt="Larê Logo" width={20} />
        <h2 className="font-bold">Larê</h2>
      </div>
      <div className="flex flex-row gap-4 font-medium text-[15px]">
        <p>Produtos</p>
        <p>Fale conosco</p>
      </div>
      <div className="flex flex-row gap-4">
        <Search size={20} />
        <ShoppingCart size={20} />
      </div>
    </div>
  );
};

export default NavBar;
