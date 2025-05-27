import { LareLogo } from "../../assets";
import { Cart } from "..";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      // Aguarda a navegação ser concluída antes de fazer o scroll
      setTimeout(() => {
        document
          .getElementById("our-products")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("our-products")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTalkToUsClick = (e: React.MouseEvent) => {
    e.preventDefault();

    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-row w-full items-center justify-between h-16 text-dark py-4 px-8 sticky top-0 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row gap-1">
        <img src={LareLogo} alt="Larê Logo" width={20} />
        <h2 className="font-bold hidden sm:block">Larê</h2>
      </div>
      <div className="flex flex-row gap-4 font-medium text-[15px]">
        <a
          href="#our-products"
          onClick={handleProductsClick}
          className="text-dark hover:text-borrow"
        >
          Produtos
        </a>
        <a
          href="#footer"
          className="text-dark hover:text-borrow"
          onClick={handleTalkToUsClick}
        >
          Fale conosco
        </a>
      </div>
      <div className="flex flex-row gap-4">
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
