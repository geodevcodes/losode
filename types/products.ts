export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
}

export interface CreateProductPayload {
  title: string;
  slug: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export interface UpdateProductPayload {
  title?: string;
  slug?: string;
  price?: number;
  description?: string;
  categoryId?: number;
  images?: string[];
}

export interface ProductCart {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  slug: string;
}
