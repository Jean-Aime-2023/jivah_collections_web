'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaShoppingCart, FaEye, FaLink } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const router = useRouter(); // Initialize useRouter

  const handleProductClick = () => {
    router.push(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div
      onClick={handleProductClick}
      key={id}
      className="group flex flex-col gap-1 items-center justify-center border rounded-lg p-5 text-lg relative cursor-pointer shadow-lg max-md:w-[90%]"
    >
      <Image
        src={image}
        alt={name}
        className="w-60 h-52 object-cover rounded-lg"
      />
      <div className="flex">{renderStars(rating)}</div>
      <p className="text-center mt-2 text-gray-700">{name}</p>
      <div className="flex items-center gap-1">
        <p className="line-through text-gray-500">$ {crossedPrice}</p>
        <p className="text-green-600 font-bold">$ {price}</p>
      </div>
      <div className="absolute w-fit bg-red-600 text-white px-3 py-1 top-6 left-0 text-xs">
        Sale!
      </div>

      {/* Hover icons */}
      <div className="group-hover:flex hidden items-center gap-5 absolute top-24 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <div className="bg-black/75 p-3 rounded cursor-pointer">
          <FaShoppingCart color="white" />
        </div>
        <div className="bg-black/75 p-3 rounded cursor-pointer">
          <FaEye color="white" />
        </div>
        <div className="bg-black/75 p-3 rounded cursor-pointer">
          <FaLink color="white" />
        </div>
      </div>

      {/* Hover icon on top-right */}
      <div className="group-hover:flex hidden p-2 bg-white rounded-full cursor-pointer shadow-lg absolute top-5 right-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Product;
