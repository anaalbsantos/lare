import type { ProductProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "@/utils";

const Product = ({ title, image, price, id }: ProductProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className="bg-gray w-52 lg:w-60 rounded-md overflow-hidden p-0 text-dark hover:text-white border-none transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-borrow"
    >
      <img src={image} className="w-full h-60 lg:h-72" />
      <div className="flex flex-col items-start p-3 ">
        <p className="font-semibold text-sm">R$ {formatPrice(price)}</p>
        <p className="font-normal text-xs">{title}</p>
      </div>
    </button>
  );
};

export default Product;
