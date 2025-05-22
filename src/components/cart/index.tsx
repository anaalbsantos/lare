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
import { ShoppingCart } from "lucide-react";
import { Button } from "..";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <ShoppingCart size={20} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
          <SheetDescription>Revise seus itens antes de pagar.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <p>oi</p>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button label="save" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
