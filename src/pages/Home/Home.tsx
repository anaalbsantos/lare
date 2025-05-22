import { Background } from "../../assets";
import { NavBar, Product } from "../../components";
import { products } from "@/api/data";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="relative w-full h-fit flex justify-center items-center">
        <p className="absolute flex w-[50%] font-bold text-center text-white text-4xl md:text-5xl lg:text-7xl">
          descubra o prazer de estar em casa.
        </p>
        <img src={Background} className="w-full object-cover" />
      </div>
      <div className="flex flex-col p-6 gap-6">
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
    </div>
  );
};

export default Home;
