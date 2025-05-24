import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "..";
import { useEffect, useState } from "react";
import { removeProductFromCart, getCart, getProductById } from "@/api";
import type { CartProps, ProductProps } from "@/types";
import { formatPrice } from "@/utils";
// import { Quantity } from "..";

const Cart = () => {
  const [cart, setCart] = useState<
    Array<{ id: string; product: ProductProps; quantity: number }>
  >([]);

  const handleRemoveProduct = async (id: string) => {
    await removeProductFromCart(id);
    fetchCart();
  };

  const fetchCart = async () => {
    const cart = await getCart();
    const products = await Promise.all(
      cart.map(async (item: CartProps) => {
        return {
          id: item.id,
          product: await getProductById(item.productId),
          quantity: item.quantity,
        };
      })
    );
    setCart(products);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <div className="relative w-fit">
          <ShoppingCart width={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-borrow text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
          <SheetDescription>Revise seus itens antes de pagar.</SheetDescription>
        </SheetHeader>
        <div
          className="flex flex-col w-full flex-grow gap-4 py-4 snap-y overflow-y-auto custom-scrollbar"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#e5e7eb #fff",
          }}
        >
          {cart.length === 0 && (
            <p className="text-center text-dark">
              Você ainda não adicionou itens ao carrinho.
            </p>
          )}
          {cart.map((item) => (
            <div
              className="flex flex-row border rounded-3xl p-3 gap-2 w-full"
              key={item.id}
            >
              <img
                src={item.product.image}
                width={100}
                className="flex rounded-sm object-cover aspect-square"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold text-base leading-4">
                      {item.product.title}
                    </p>
                    <p className="text-sm">
                      R$ {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <button
                    className="p-0 self-start"
                    onClick={() => handleRemoveProduct(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="italic text-sm">{item.quantity} unidades</p>
                {/* <Quantity
            quantity={item.quantity}
            setQuantity={(quantity: number) =>
              setCart((prevCart) =>
          prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity }
              : cartItem
          )
              )
            }
          /> */}
              </div>
            </div>
          ))}
        </div>

        <SheetFooter className="flex sm:flex-col gap-2">
          <div className="flex justify-between w-full mb-2 px-1">
            <span className="font-medium">Total:</span>
            <span className="font-semibold">
              R${" "}
              {formatPrice(
                cart.reduce(
                  (sum, item) => sum + item.product.price * item.quantity,
                  0
                )
              )}
            </span>
          </div>
          <SheetClose asChild>
            <Button label="Comprar" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
