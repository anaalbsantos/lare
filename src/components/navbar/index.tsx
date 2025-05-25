import { LareLogo } from "../../assets";
import { Search } from "lucide-react";
import { Cart } from "..";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row w-full items-center justify-between h-16 text-dark py-4 px-8 sticky top-0 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row gap-1">
        <img src={LareLogo} alt="Larê Logo" width={20} />
        <h2 className="font-bold">Larê</h2>
      </div>
      <div className="flex flex-row gap-4 font-medium text-[15px]">
        <a href="#our-products" className="text-dark hover:text-borrow">
          Produtos
        </a>
        <a href="#footer" className="text-dark hover:text-borrow">
          Fale conosco
        </a>
      </div>
      <div className="flex flex-row gap-4">
        <Search
          size={20}
          className="text-dark hover:text-borrow cursor-pointer"
        />
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
