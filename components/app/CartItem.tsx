import Image from 'next/image';
import React from 'react';

const CartItem = () => {
  return (
    <div className="flex justify-between items-center pb-2 mb-2">
      {/* img */}
      <Image src={''} alt="img" />
      <div className="flex flex-col gap-20">
        <p className="font-medium">Product Name</p>
        <p className="font-medium">1 × Fr Product Price</p>
      </div>
      <button className="text-gray-600 hover:text-gray-900 button">✕</button>
    </div>
  );
};

export default CartItem;
