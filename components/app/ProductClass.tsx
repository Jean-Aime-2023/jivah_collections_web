import React from 'react';
import { products } from '@/constants/Products';
import Image from 'next/image';
import { RiStarSFill } from 'react-icons/ri';
import { IoIosStarOutline } from 'react-icons/io';
import { FaEye, FaLink, FaShoppingCart } from 'react-icons/fa';

interface ProductClassProps {
  title: string;
  subtitle: string;
  tag: string; // Use this to dynamically filter products
}

const ProductClass: React.FC<ProductClassProps> = ({ title, subtitle, tag }) => {
  // Dynamically filter products based on the provided tag
  const filteredProducts = products.filter((product) => product.tag === tag);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<RiStarSFill key={i} size={20} fill="#eab308" />);
      } else {
        stars.push(<IoIosStarOutline key={i} size={20} color="#eab308" />);
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto flex flex-col gap-6 items-center justify-center text-base my-[5rem]">
      {/* Subtitle */}
      <p className="text-brown text-lg">{subtitle}</p>
      {/* Title */}
      <h4 className="text-4xl tracking-wide font-semibold">{title}</h4>
      {/* Map through filtered products */}
      <div className="flex gap-4 overflow-x-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col gap-1 items-center justify-center border rounded-lg p-5 text-lg relative cursor-pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-60 h-52 object-cover rounded-lg"
            />
            <div className="flex">{renderStars(product.rating)}</div>
            <p className="text-center mt-2 text-gray-700">{product.name}</p>
            <div className="flex items-center gap-1">
              <p className="line-through">$ {product.crossedPrice}</p>
              <p>$ {product.price}</p>
            </div>
            <div className="absolute w-fit bg-red-600 text-white px-3 py-1 top-6 left-0 text-xs">
              Sale!
            </div>

            {/* Hover icons - 1 */}
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

            {/* Hover icons - 2 */}
            <div className="group-hover:flex hidden p-2 bg-white rounded-full cursor-pointer shadow-lg absolute top-5 right-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <FaShoppingCart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductClass;
