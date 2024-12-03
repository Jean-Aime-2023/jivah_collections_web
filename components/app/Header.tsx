'use client';
import React from 'react';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaCaretDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdShoppingCart } from 'react-icons/md';

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
    <section className="container mx-auto py-6 flex items-center justify-between bg-white">
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
      <div className='flex gap-4'>
        <IoSearch size={25} color="#eba046" />
        <MdShoppingCart size={25} color="#eba046" />
      </div>
    </section>
  );
};

export default Header;
