export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  stock_quantity: number;
}

export interface CreateProductPayload {
  name: string;
  brand: string;
  price: number;
  category: string;
  stock_quantity?: number;
}
