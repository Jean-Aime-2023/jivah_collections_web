"use client"
import { DataTableProducts } from '@/components/app/DataTableProducts';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Products = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex items-end justify-end pb-5">
        <Button
          onClick={() => router.push('/admin/products/new')}
          className="bg-brown rounded-lg px-5 py-2 mr-3 mt-2 hover:bg-brown/95"
        >
          Add Product
        </Button>
      </div>
      <div className="bg-white p-4 border shadow rounded-xl">
        <p className="font-semibold text-lg">All Product</p>
        <DataTableProducts />
      </div>
    </>
  );
};

export default Products;
