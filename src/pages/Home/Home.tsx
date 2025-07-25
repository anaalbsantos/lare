import { getProducts } from "@/api";
import { Background } from "../../assets";
import { Footer, NavBar, Product } from "../../components";
import { useEffect, useState } from "react";
import type { ProductProps } from "@/types";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchProducts = async () => {
    await getProducts().then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <NavBar />
      <div className="relative w-full h-fit flex justify-center items-center -mt-16">
        <p className="absolute flex w-[50%] font-bold text-center text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl">
          descubra o prazer de estar em casa.
        </p>
        <img src={Background} className=" w-full object-cover" />
      </div>
      <div id="our-products" className="flex flex-col p-20 gap-6">
        <p className="font-bold text-2xl lg:text-4xl text-dark text-center">
          nossos produtos
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {products.map((product, idx) => (
            <Product
              key={idx}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
