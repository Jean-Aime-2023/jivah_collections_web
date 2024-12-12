'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { RiStarSFill } from 'react-icons/ri';
import { FaCartShopping } from 'react-icons/fa6';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  crossedPrice: number;
  rating: number;
  image: string | StaticImageData;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  price,
  crossedPrice,
  rating,
  image,
}) => {
  const router = useRouter(); // Initialize useRouter

  const handleProductClick = () => {
    router.push(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div
      onClick={handleProductClick}
      key={id}
      className="group flex flex-col gap-1 items-center justify-center border rounded-3xl text-lg relative cursor-pointer shadow-lg max-md:w-[94%] hover:scale-105 transition-transform duration-200"
    >
      <div className="p-3 rounded-full shadow-lg border absolute right-5 top-5 bg-white">
        <FaCartShopping size={23} color="#4a4747" />
      </div>
      <Image
        src={image}
        alt={name}
        className="w-60 h-52 object-cover rounded-3xl p-2"
      />
      <div className="w-96 py-5 px-12 max-md:px-6 max-md:w-[100%]">
        <p className="font-bold text-xl max-md:text-sm py-2">{name}</p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="line-through text-gray-500">$ {crossedPrice}</p>
            <p className="text-green-600 font-bold">$ {price}</p>
          </div>
          <div className="flex items-center gap-1">
            <RiStarSFill size={20} fill="#eab308" />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
