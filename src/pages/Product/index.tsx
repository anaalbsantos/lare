import { NavBar, Button, Quantity, Footer } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ProductProps } from "@/types";
import {
  findProductInCart,
  getProductById,
  postCart,
  patchProductInCart,
} from "@/api";
import { formatPrice } from "@/utils";
import { toast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id === undefined) return;
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const addProductOnCart = async () => {
    try {
      const foundProduct = await findProductInCart(id || "");
      if (Array.isArray(foundProduct) && foundProduct.length > 0) {
        await patchProductInCart(
          foundProduct[0].id,
          foundProduct[0].quantity + quantity
        );
      } else {
        await postCart({
          productId: id || "",
          quantity: quantity,
        });
      }
      // envia evento para atualizar carrinho
      window.dispatchEvent(new Event("cartUpdated"));
      toast({
        title: "✅ Produto adicionado ao carrinho",
        duration: 2000,
      });
    } catch {
      toast({
        title: "❌ Erro ao adicionar produto ao carrinho",
      });
    }
  };

  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col items-center lg:items-start lg:flex-row py-10 px-40 gap-10 text-dark">
        {product && (
          <img
            src={product.image}
            className="relative object-cover max-h-[400px] w-full object-center md:max-h-[500px] 2xl:max-h-[550px] rounded-xl transition-opacity duration-500 delay-200 aspect-square"
          />
        )}
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-2xl">{product?.title}</p>
            <p className="text-xl">R$ {formatPrice(product?.price || 0)}</p>
          </div>
          <p className="text-[#8a8a8a]">{product?.description}</p>
          <div>
            <p>Quantidade</p>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </div>
          <Button label="Adicionar ao carrinho" onClick={addProductOnCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
