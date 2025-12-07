export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'jersey' | 'shoes' | 'jacket' | 'shorts' | 'cap' | 'accessories';
  team?: string;
  player?: string;
  image: string;
  sizes: string[];
  colors: string[];
  description: string;
  isNew?: boolean;
  isLimited?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
