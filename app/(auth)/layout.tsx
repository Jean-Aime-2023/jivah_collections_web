import Image from 'next/image';
import React from 'react';
import authImg from '@/public/assets/authImg.png';

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto h-screen w-screen flex justify-center items-center">
      <section className="shadow-xl border rounded-3xl h-[90%] w-[72%] flex justify-center items-center p-16">
        <div className="w-[50%] bg-brown rounded-3xl p-5 px-10 h-full flex flex-col gap-7 overflow-hidden">
          <h1 className="text-4xl text-white pt-10 font-semibold">
            Find Your <br /> Clothes here In <br /> An Easy And Fast Way
          </h1>
          <p className="text-white">
            Simplify the way you get your clothes with a great platform.
          </p>
          <Image src={authImg} alt="img" className='self-center' />
        </div>
        <div className="w-[50%] px-10 py-4 h-full flex items-center justify-center">
            {children}
        </div>
      </section>
    </div>
  );
};

export default Authlayout;
