interface Variation {
  color: string;
  colorCode: string;
  colorImage: string;
  image: string;
}

export interface ProductType {
  id: number;
  category: string;
  type: string;
  name: string;
  gender: string | null;
  new: boolean | string;
  sale: boolean;
  rate: number;
  price: number;
  originPrice: number;
  brand: string | null;
  sold: number;
  quantity: number;
  quantityPurchase: number;
  sizes: Array<string>;
  variation: Variation[];
  thumbImage: Array<string>;
  images: Array<string>;
  description: string;
  action: string;
  slug: string;
}
