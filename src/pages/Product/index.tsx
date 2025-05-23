import { NavBar, Button, Quantity, Footer } from "../../components";
import { useParams } from "react-router-dom";
import { products, cart } from "@/api/data";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const addProductOnCart = () => {
    if (product) {
      cart.push(product);
    }
  };

  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col items-center lg:items-start lg:flex-row py-10 px-40 gap-10 text-dark">
        <img
          src={product?.image}
          className="relative object-cover max-h-[400px] w-full object-center md:max-h-[500px] 2xl:max-h-[550px] rounded-xl transition-opacity duration-500 delay-200 aspect-square"
        />
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-2xl">{product?.title}</p>
            <p className="text-xl">R$ {product?.price}</p>
          </div>
          <p className="text-[#8a8a8a]">{product?.description}</p>
          <div>
            <p>Quantidade</p>
            <Quantity />
          </div>
          <Button label="Adicionar ao carrinho" onClick={addProductOnCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
