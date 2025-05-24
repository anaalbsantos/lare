"use client";

import type { QuantityProps } from "@/types";
import { MinusIcon, PlusIcon } from "lucide-react";

const Quantity = ({ quantity, setQuantity }: QuantityProps) => {
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-row gap-5 items-center border rounded-md w-fit ">
      <button
        onClick={decrement}
        className="p-2 bg-white border-none focus-visible:outline-none"
      >
        <MinusIcon color="#333333" />
      </button>
      <p className="text-dark">{quantity}</p>
      <button
        onClick={increment}
        className="p-2 bg-white border-none focus-visible:outline-none"
      >
        <PlusIcon color="#333333" />
      </button>
    </div>
  );
};

export default Quantity;
