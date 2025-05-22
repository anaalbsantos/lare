"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  const increment = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-row gap-5 items-center border border-[#8a8a8a] rounded-md w-fit ">
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
