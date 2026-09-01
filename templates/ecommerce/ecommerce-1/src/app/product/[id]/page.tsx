import React from 'react';
import ProductDetailPage from './ProductDetailClient';
import { PRODUCTS } from '@/data/products';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function Page() {
  return <ProductDetailPage />;
}
