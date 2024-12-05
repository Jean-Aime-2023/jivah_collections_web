'use client';
import React, { useState } from 'react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import CartProduct from './CartProduct';
import { Button } from '../ui/button';

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

const initialCartProducts = [
  { id: 1, name: 'Lacoste T-Shirt', price: 50 },
  { id: 2, name: 'Small Bag', price: 129.99 },
  { id: 3, name: 'JC Complete', price: 39.99 },
  { id: 4, name: 'Hoodie O', price: 129.99 },
];

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu sidebar
  const pathname = usePathname();
  const router = useRouter();
  const [cartProducts, setCartProducts] = useState(initialCartProducts);
  const handleRemoveProduct = (id: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  return (
    <div className="shadow-sm">
      {/* Main Header Section */}
      <section className="container mx-auto py-6 flex items-center justify-between bg-white relative max-md:px-6 max-md:py-4">
        <Image src={logo} alt="logo" className="max-md:w-14" />
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
              <Image src={logo} alt="logo" className="max-md:w-14" />
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)} // Close menu
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-6">
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
          <div className="fixed top-0 right-0 h-full w-[43%] bg-white shadow-lg z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b pb-5">
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
              {cartProducts.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  onRemove={handleRemoveProduct}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col w-full gap-4">
              <div className="flex items-center justify-between py-4 border-b">
                <p>Subtotal</p>
                <p>
                  $
                  {cartProducts
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <Button
                  onClick={() => router.push('/checkout')}
                  className="bg-brown hover:bg-amber-600 rounded-md text-white tracking-widest py-8 w-full my-4"
                >
                  PROCEED TO CHECKOUT
                </Button>
                <Button
                  onClick={() => router.push('/shop')}
                  className="bg-transparent border hover:border-transparent hover:bg-brown hover:text-white rounded-md text-brown tracking-widest py-8 w-full"
                >
                  CONTINUE SHOPPING
                </Button>{' '}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
