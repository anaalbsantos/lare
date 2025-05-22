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
import { Button, Quantity } from "..";
import { cart } from "@/api/data";

const Cart = () => {
  const removeProductFromCart = (id: number) => {
    const index = cart.findIndex((product) => product.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  };

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
        <div className="flex flex-col w-full flex-grow gap-4 py-4">
          {cart.map((product) => (
            <div className="flex flex-row border rounded-3xl p-3 gap-2 w-full">
              <img
                src={product.image}
                width={100}
                className="flex rounded-sm object-cover aspect-square"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold text-base">{product.title}</p>
                    <p className=" text-sm">R$ {product.price}</p>
                  </div>
                  <button
                    className="p-0 self-start"
                    onClick={() => removeProductFromCart(product.id)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <Quantity />
              </div>
            </div>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button label="Comprar" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
