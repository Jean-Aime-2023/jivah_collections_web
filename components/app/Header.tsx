/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCaretDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { categories } from '@/constants/Categories';
import CartItem from './CartItem';

const links = [
  {
    id: 1,
    name: 'Home',
    link: '/home',
    icon: false,
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
    icon: false,
  },
  {
    id: 3,
    name: 'Our Shop',
    link: '/ourshop',
    icon: false,
  },
  {
    id: 4,
    name: 'Categories',
    link: '/categories',
    icon: true,
  },
];

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart visibility
  const pathname = usePathname();

  return (
    <>
      <section className="container mx-auto py-6 flex items-center justify-between bg-white relative">
        <Image src={logo} alt="logo" />
        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className={`flex items-center gap-1 ${
                pathname === link.link ? 'text-brown' : 'hover:text-brown'
              }`}
            >
              {link.name}
              {link.icon && <FaCaretDown />}
            </Link>
          ))}
        </ul>
        <div className="flex gap-4">
          <IoSearch size={25} color="#eba046" />
          {/* Cart Icon */}
          <MdShoppingCart
            size={25}
            color="#eba046"
            className="cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </section>

      {/* Overlay and Cart Sidebar */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)} // Close cart when clicking outside
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-[35%] bg-white shadow-lg z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsCartOpen(false)} // Close cart
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* Cart Items */}
              <CartItem />
              {/* Repeat above block for additional cart items */}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>SubTotal</p>
                <p>$ 782</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping</p>
                <p>$ 782</p>
              </div>
            </div>
            <div className="mt-4 flex w-full gap-4">
              <button className="flex-1 py-2 px-4 bg-brown text-white rounded-md hover:bg-opacity-90">
                Proceed to Checkout
              </button>
              <button className="flex-1 py-2 px-4 bg-brown text-white rounded-md hover:bg-opacity-90">
                View Cart
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
