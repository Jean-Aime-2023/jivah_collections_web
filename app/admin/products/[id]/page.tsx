/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/constants/Products';
import Image from 'next/image';
import { RiStarSFill } from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';

const ProductReview = () => {
  const params = useParams(); // Access route parameters
  const router = useRouter(); // Access router for navigation
  const numericId = params?.id ? Number(params.id) : null;

  const product = numericId
    ? products.find((product) => product.id === numericId)
    : null;

  if (!product) {
    return (
      <div>Product not found. Please check the product ID in the URL.</div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product?.image);

  // Get the related products by filtering the product list based on the related product ids
  const relatedProducts = products.filter((p) =>
    product.relatedProducts.includes(p.id.toString())
  );

  return (
    <div className="p-20 py-10 max-lg:px-12 max-md:px-6 max-lg:py-6 flex flex-col gap-4 mx-auto mb-3 mt-1 bg-white w-full border shadow rounded-2xl">
      <h1 className="text-2xl font-bold input-div pb-5">Product Details</h1>
      <div className="flex flex-row gap-7 max-lg:flex-col">
        <div className="flex flex-col items-center gap-4 w-[35%] max-lg:w-full">
          <div className="h-[25rem]">
            <Image
              src={selectedImage || product.image}
              alt={product.name}
              width={200}
              height={100}
              className="rounded-lg border h-full w-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.otherColors?.map((color, index) => (
              <div
                key={index}
                className="cursor-pointer p-1 border rounded"
                onClick={() => setSelectedImage(color.image)}
              >
                <Image
                  src={color.image}
                  alt={color.color}
                  width={100}
                  height={50}
                  className="rounded h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[60%] max-lg:w-full">
          <h1 className="text-2xl font-bold input-div">{product.name}</h1>
          <p className="text-gray-400">{product.description}</p>
          <p className="text-2xl">${product.price}</p>
          <p className="text-lg">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-lg">
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p className="text-lg text-gray-400">
            <strong className="text-black">Description:</strong>{' '}
            {product.description}
          </p>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold input-div">Related Products</h1>
            <div className="flex flex-wrap gap-6 items-center my-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() =>
                    router.push(`/admin/products/${relatedProduct.id}`)
                  }
                  className="group bg-white/95 max-md:mx-3 max-md:my-2 border flex rounded-lg flex-col gap-1 items-center justify-center text-lg relative cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <div className="p-3 rounded-full shadow-lg border absolute right-5 top-5 bg-white">
                    <FaCartShopping size={23} color="#4a4747" />
                  </div>
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-96 h-72 object-cover rounded-3xl p-2"
                  />
                  <div className="w-96 p-5 max-md:w-[90%]">
                    <p className="font-bold text-xl max-md:text-lg">
                      {relatedProduct.name}
                    </p>
                    <p className="text-gray-400 text-sm py-2">
                      {relatedProduct.description}
                    </p>
                    <div className="w-full flex items-center justify-between">
                      <p className="font-bold text-xl max-md:text-lg">
                        $ {relatedProduct.price}
                      </p>
                      <div className="flex items-center gap-1">
                        <RiStarSFill size={20} fill="#eab308" />
                        {relatedProduct.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
