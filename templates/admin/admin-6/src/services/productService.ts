import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data/mockData';
import { getStorageData, setStorageData } from './storageService';

const STORAGE_KEY = 'app_products';

export const productService = {
  getProducts: (): Product[] => {
    return getStorageData<Product[]>(STORAGE_KEY, INITIAL_PRODUCTS);
  },

  getProductById: (id: string): Product | undefined => {
    const products = productService.getProducts();
    return products.find((p) => p.id === id);
  },

  createProduct: (data: Omit<Product, 'id' | 'createdAt' | 'rating' | 'salesCount'>): Product => {
    const products = productService.getProducts();
    const newProduct: Product = {
      ...data,
      id: `prod_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString().split('T')[0],
      rating: 5.0,
      salesCount: 0,
    };
    const updated = [newProduct, ...products];
    setStorageData(STORAGE_KEY, updated);
    return newProduct;
  },

  updateProduct: (id: string, data: Partial<Product>): Product => {
    const products = productService.getProducts();
    let updatedProduct: Product | null = null;
    const updated = products.map((p) => {
      if (p.id === id) {
        updatedProduct = { ...p, ...data };
        if (updatedProduct.stock <= 0) {
          updatedProduct.status = 'Out of Stock';
        } else if (updatedProduct.stock <= updatedProduct.lowStockThreshold) {
          updatedProduct.status = 'Low Stock';
        } else {
          updatedProduct.status = 'In Stock';
        }
        return updatedProduct;
      }
      return p;
    });
    setStorageData(STORAGE_KEY, updated);
    if (!updatedProduct) throw new Error(`Product with id ${id} not found`);
    return updatedProduct;
  },

  deleteProduct: (id: string): void => {
    const products = productService.getProducts();
    const updated = products.filter((p) => p.id !== id);
    setStorageData(STORAGE_KEY, updated);
  },
};
