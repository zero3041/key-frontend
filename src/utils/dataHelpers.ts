import {ProductType} from "@/type/ProductType";

export const normalizeProductData = (products: any[]): ProductType[] => {
  return products.map(product => ({
    ...product,
    gender: product.gender || "",
    brand: product.brand || "",
    
    new: typeof product.new === 'string' ? product.new === 'true' : Boolean(product.new),
    sale: typeof product.sale === 'string' ? product.sale === 'true' : Boolean(product.sale)
  }));
};