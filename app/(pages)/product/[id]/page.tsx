'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/constants/Products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductClass from '@/components/app/ProductClass';

const ProductDetails = () => {
  const params = useParams(); // Access route parameters
  const id = params?.id ? Number(params.id) : null;

  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto py-[5rem] max-md:px-7">
      <div className="flex flex-col gap-9 mb-20">
        <div className="flex gap-8 max-md:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <Image
              src={selectedImage || product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg border"
            />
            <div className="flex flex-wrap max-lg:grid max-lg:grid-cols-2 gap-4 overflow-hidden">
              {product.otherColors?.map((color, index) => (
                <div
                  key={index}
                  className="cursor-pointer p-1 border rounded"
                  onClick={() => setSelectedImage(color.image)}
                >
                  <Image
                    src={color.image}
                    alt={color.color}
                    width={200}
                    height={50}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4">
              <p className="text-green-600 font-bold text-lg">
                ${product.price}
              </p>
              <p className="text-gray-500 line-through">
                ${product.crossedPrice}
              </p>
            </div>
            <p className="text-gray-500">
              Availability: <span className="text-green-500">57 in stock</span>
            </p>
            <form action="" className="flex items-center gap-3">
              <Input defaultValue={1} className="border py-2 w-20" />
              <Button className="tracking-widest text-white bg-brown button">
                ADD TO CART
              </Button>
            </form>
            <hr className="border border-gray-500 w-full" />
            <p>SKU: 011120241866</p>
            <p>
              Categories:{' '}
              <span className="text-brown cursor-pointer">
                BOTH, GENERAL, JACKET, LATEST, MEN, Uncategorized, WOMEN
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold">Description</p>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>

      <ProductClass
        title={'Related Products'}
        subtitle={'New To You'}
        tag={'latest'}
      />
    </div>
  );
};

export default ProductDetails;
