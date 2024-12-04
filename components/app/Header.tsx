'use client';
import React, { useState } from 'react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';

const links = [
  { id: 1, name: 'Home', link: '/home' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Our Shop', link: '/ourshop' },
  { id: 4, name: 'Categories', link: '/categories' },
];
const linksMobile = [
  { id: 1, name: 'Home', link: '/home' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Our Shop', link: '/ourshop' },
  { id: 4, name: 'Categories', link: '/categories' },
  { id: 5, name: 'Cart', link: '/cart' },
  { id: 6, name: 'Logout', link: '/sign-in' },
];

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu sidebar
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Main Header Section */}
      <section className="container mx-auto py-6 flex items-center justify-between bg-white relative max-md:px-6 shadow-sm">
        <Image src={logo} alt="logo" />
        <ul className="hidden md:flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className={`${
                pathname === link.link ? 'text-brown' : 'hover:text-brown'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="hidden md:flex gap-6">
          <IoSearch size={25} color="#eba046" className="cursor-pointer" />
          <MdShoppingCart
            size={25}
            color="#eba046"
            className="cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          />
          <FaSignOutAlt
            onClick={() => router.push('/sign-in')}
            size={25}
            color="#eba046"
            className="cursor-pointer"
          />
        </div>
        <IoMenu
          size={30}
          color="#eba046"
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(true)} // Open menu sidebar
        />
      </section>

      {/* Sidebar for Menu (Mobile and Medium Screens) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <Image src={logo} alt="logo" />
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)} // Close menu
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {linksMobile.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className={`${
                    pathname === link.link ? 'text-brown' : 'hover:text-brown'
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu after selecting a link
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-full w-[35%] bg-white shadow-lg z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* Add cart items here */}
              <p>Your cart is empty</p>
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
