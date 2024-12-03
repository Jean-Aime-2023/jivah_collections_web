/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCaretDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';
import { categories } from '@/constants/Categories';

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
  const pathname = usePathname();

  return (
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
        <MdShoppingCart size={25} color="#eba046" />
      </div>

      {/* categies menu */}
      {/* <div className="w-full p-10 border absolute top-24 flex flex-wrap gap-10 bg-white">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer hover:text-brown">
            {category}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Header;