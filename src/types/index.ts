export interface ProductProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
}

export interface CartProps {
  id: number;
  productId: string;
  quantity: number;
}

export interface QuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}
