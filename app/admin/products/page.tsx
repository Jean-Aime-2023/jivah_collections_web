import { DataTableProducts } from '@/components/app/DataTableProducts';
import React from 'react';

const Products = () => {
  return (
    <div className="bg-white p-4 border shadow rounded-xl">
      <p className="font-semibold text-lg">All Products</p>
      <DataTableProducts />
    </div>
  );
};

export default Products;
