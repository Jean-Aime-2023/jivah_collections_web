"use client"
import Product from '@/components/app/Product';
import { categories } from '@/constants/Categories';
import { products } from '@/constants/Products';
import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Shop = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="container mx-auto flex gap-10 py-14 text-gray-500"
    >
      <div className="w-[25%] border-r px-6 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="p-3 border outline-none"
            placeholder="Search products..."
          />
          <button type="submit" className="p-3 bg-brown button">
            <FaAngleRight size={24} color="black" />
          </button>
        </div>
        <h3 className="text-4xl">Filter by price</h3>
        <p className="text-2xl text-gray-500">Filter by categories</p>
        <div className="px-5 flex flex-col gap-1">
          {categories.map((category) => (
            <Link href={'#'} key={category} className="text-brown">
              {category}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[75%] px-6 flex flex-col gap-10">
        <p>Home / BOTH</p>
        <h1 className="text-6xl text-brown">BOTH</h1>
        <div className="flex flex-row justify-between items-center w-full">
          <p>Showing 1–20 of 50 results</p>
          {/* select input */}
          <select
            className="border p-2 rounded-md outline-none text-gray-600"
            defaultValue="default"
          >
            <option value="default" disabled>
              Sort by
            </option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="newArrivals">Newest Arrivals</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-10">
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
    </div>
  );
};

export default Shop;
