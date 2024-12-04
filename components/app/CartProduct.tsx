import React from 'react';
import product from '@/public/assets/lacoste t-shirt.jpg';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

interface CartProductProps {
  id: number;
  name: string;
  price: number;
  onRemove: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  id,
  name,
  price,
  onRemove,
}) => {
  return (
    <div className="flex max-lg:flex-col max-lg:gap-4 justify-between items-center p-4 max-lg:p-1 max-lg:py-5 border-b text-lg">
      <Image
        src={product}
        alt={name}
        width={200}
        className="p-2 bg-gray-200 rounded-lg"
      />
      <div className='flex items-center justify-between w-full px-10'>
        <div className="flex flex-col gap-5 max-md:gap-3">
          <p className="text-gray-500">{name}</p>
          <div className="flex items-center gap-3 max-md:gap-1">
            <p className="text-gray-300 border-r pr-3">${price}</p>
            <p className="text-green-600">In Stock</p>
          </div>
          <div className="px-3 py-2 max-md:py-1 border rounded flex justify-between items-center gap-3 text-gray-400">
            <FaMinus className="cursor-pointer" />
            <span>1</span>
            <FaPlus className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between max-md:hidden">
          <p>${price}</p>
          <div
            onClick={() => onRemove(id)}
            className="text-gray-400 cursor-pointer flex items-center"
          >
            <MdDelete size={24} />
            <p>Delete</p>
          </div>
        </div>
        <div
          onClick={() => onRemove(id)}
          className="p-1 px-3 text-xl rounded-full bg-gray-100 cursor-pointer flex justify-center items-center"
        >
          x
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
