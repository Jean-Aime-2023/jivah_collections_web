import React from 'react';
import { products } from '@/constants/Products';
import Image from 'next/image';
import { RiStarSFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { FaCartShopping } from 'react-icons/fa6';

interface ProductClassProps {
  title: string;
  subtitle: string;
  tag: string; // Use this to dynamically filter products
}

const ProductClass: React.FC<ProductClassProps> = ({
  title,
  subtitle,
  tag,
}) => {
  const router = useRouter();
  // Dynamically filter products based on the provided tag
  const filteredProducts = products.filter((product) => product.tag === tag);
  const limitedProducts = filteredProducts.slice(0, 3);

  return (
    <div className="flex flex-col gap-6 text-base">
      {/* Subtitle */}
      <p className="text-brown text-lg max-md:text-center">{subtitle}</p>
      {/* Title */}
      <h4 className="text-4xl tracking-wide font-semibold max-md:text-center">
        {title}
      </h4>
      {/* Map through filtered products */}
      <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
        {limitedProducts.map((product) => (
          <div
            onClick={() => router.push(`/product/${product.id}`)}
            key={product.id}
            className="group bg-white/95 max-md:mx-5 max-md:my-2 border flex rounded-3xl flex-col gap-1 items-center justify-center text-lg relative cursor-pointer hover:scale-105 transition-transform duration-200 hover:shadow"
          >
            <div className="p-3 rounded-full shadow-lg border absolute right-5 top-5 bg-white">
              <FaCartShopping size={23} color="#4a4747" />
            </div>
            <Image
              src={product.image}
              alt={product.name}
              className="w-96 h-72 object-cover rounded-3xl p-2"
            />
            <div className="w-96 p-5 max-md:w-[90%]">
              <p className="font-bold text-2xl max-md:text-xl">
                {product.name}
              </p>
              <p className="text-gray-400 text-sm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                suscipit sequi.
              </p>
              <div className="w-full flex items-center justify-between">
                <p className="font-bold text-2xl">$ {product.price}</p>
                <div className='flex items-center gap-1'>
                  <RiStarSFill size={20} fill="#eab308" />
                  {product.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductClass;
