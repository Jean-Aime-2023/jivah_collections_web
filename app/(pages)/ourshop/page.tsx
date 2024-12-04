"use client"
import Product from '@/components/app/Product';
import { products } from '@/constants/Products';
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const OurShop = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-top" className="container mx-auto py-[5rem]">
      <h1 className='text-2xl text-center pb-5'>Our Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-md:flex max-md:flex-wrap max-md:justify-center">
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
