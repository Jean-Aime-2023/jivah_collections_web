import Product from '@/components/app/Product';
import { products } from '@/constants/Products';
import React from 'react';

const OurShop = () => {
  return (
    <div className="container mx-auto py-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            crossedPrice={product.crossedPrice}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
