import Link from 'next/link';
import React from 'react';
import img from '@/public/assets/cropped-image.png';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="bg-[#111312] py-10 text-white text-base">
      <div className='container mx-auto flex flex-col gap-[7rem]'>
        <div className="flex justify-between gap-6">
          <div className='flex flex-col gap-2'>
            <p className='pb-2 font-semibold text-xl'>Contact Deatails</p>
            <Link href={'#'}>GIKONDO, KK 565 ST.</Link>
            <Link href={'#'}>info@jivahcollections.com</Link>
            <Link href={'#'}>+250789853823</Link>
          </div>
          <Image src={img} alt="img" />
          <div className='flex flex-col gap-2'>
            <p className='pb-2 font-semibold text-xl'>Quick Links</p>
            <Link href={'#'}>Shipping & Returns</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Customer Service</Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p>Copyright © 2024 JIVAH COLLECTIONS</p>
          <div className="flex items-center gap-6">
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
