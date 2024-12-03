/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import img1 from '@/public/assets/hero.jpg';
import img2 from '@/public/assets/menfash.png';
import img3 from '@/public/assets/kids.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import imgGlass from '@/public/assets/glasses.jpg';
import imgFume from '@/public/assets/fume.jpg';
import ProductClass from '@/components/app/ProductClass';
import watchImg from '@/public/assets/watch.png';
import { FaDivide } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { AiOutlineFileProtect } from 'react-icons/ai';
import fila from '@/public/assets/filalogo.jpg';
import adidas from '@/public/assets/adidaslogo.jpg';
import chanel from '@/public/assets/chanellogo.jpg';
import nike from '@/public/assets/nikelogo.jpg';
import gucci from '@/public/assets/guccilogo.jpg';
import logo from '@/public/assets/logo.png';
import { useRouter } from 'next/navigation';

const adContent = [
  {
    id: 1,
    name: 'Women Collection',
    image: img1,
  },
  // {
  //   id: 2,
  //   name: 'Men Collection',
  //   image: img2,
  // },
  // {
  //   id: 3,
  //   name: 'Children Collection',
  //   image: img3,
  // },
];

const features = [
  {
    id: 1,
    icon: <FaDivide color="#db9744" size={30} />,
    name: 'Season Sale',
    rotate: true,
  },
  {
    id: 2,
    icon: <FaTruckFast color="#db9744" size={30} />,
    name: 'Easy Shipping',
    rotate: false,
  },
  {
    id: 3,
    icon: <AiOutlineFileProtect color="#db9744" size={30} />,
    name: 'Money Back Guarantee',
    rotate: false,
  },
];

const partners = [
  {
    id: 1,
    image: fila,
  },
  {
    id: 2,
    image: adidas,
  },
  {
    id: 3,
    image: chanel,
  },
  {
    id: 4,
    image: nike,
  },
  {
    id: 5,
    image: gucci,
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-7">
      {/* ad divs */}
      {adContent.map((ad) => (
        <div
          key={ad.id}
          className="bg-gray-100 rounded-3xl py-10 flex items-center justify-center gap-[10rem] mx-20"
        >
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-medium">{ad.name}</h3>
            <p>A Whole New Look</p>
            <Button
              onClick={() => router.push('/ourshop')}
              className="px-8 py-3 text-white w-fit bg-brown hover:bg-[#db9744] tracking-widest"
            >
              SHOP NOW
            </Button>
          </div>
          <Image src={ad.image} alt="img" height={600} />
        </div>
      ))}

      <div className="container mx-auto flex items-center justify-center my-[5rem]">
        <ProductClass
          title="Best Selling"
          subtitle="Blossom into a New You!"
          tag="bestselling"
        />
      </div>
      <div className="container mx-auto flex gap-6 w-fit">
        <div className="w-[36rem] flex items-center justify-between border shadow-md rounded-xl px-10">
          <div>
            <p className="text-2xl pb-6">Quality Products</p>
            <Button
              onClick={() => router.push('/shop')}
              className="bg-transparent px-10 py-5 border-2 border-brown rounded-md text-black hover:bg-brown tracking-widest hover:border-transparent"
            >
              SHOP NOW
            </Button>
          </div>
          <Image src={imgGlass} alt="img" height={300} />
        </div>
        <div className="w-[36rem] flex items-center justify-between border shadow-md rounded-xl px-10 py-10">
          <div>
            <p className="text-2xl">Find all popular brands</p>
          </div>
          <Image src={imgFume} alt="img" height={300} />
        </div>
      </div>

      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="container mx-auto flex gap-6 w-[62%] items-center mt-[7rem]">
          <Image
            src={watchImg}
            alt="img"
            className="w-[50%] h-[25rem] rounded-xl"
          />
          <div className="w-[50%] flex flex-col items-center justify-center gap-3">
            <p className="text-lg">Be Bold, Be Daring</p>
            <h2 className="text-4xl text-center">
              A Whole New <br /> Look
            </h2>
            <Button className="px-10 py-5 border-2 border-transparent hover:bg-transparent rounded-md text-black bg-brown tracking-widest hover:border-brown">
              VIEW MORE
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-fit gap-[10rem]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-center items-center gap-4"
            >
              <div
                className={`p-4 rounded-full border border-brown ${
                  feature.rotate ? '-rotate-45' : ''
                }`}
              >
                {feature.icon}
              </div>
              <p className="text-xl">{feature.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="bg-[#fff7ed] py-[5rem]">
            <div className="container mx-auto flex justify-center items-center gap-7">
              {partners.map((partner) => (
                <Image
                  key={partner.id}
                  src={partner.image}
                  alt="img"
                  height={150}
                  width={210}
                />
              ))}
            </div>
          </div>
          <div className="bg-[#f1f5f9] py-[3rem] flex flex-col items-center justify-center text-center gap-5 text-xl">
            <p className="text-brown">Testimonials</p>
            <h3 className="text-4xl">Our Happy Clients</h3>
            <p className="text-gray-500">
              &quot;Jivah Collections are the best, nothing you can&apos;t find
              there.&quot;
            </p>
            <Image src={logo} alt="img" />
            <p>JC</p>
          </div>
        </div>

        <div className="container mx-auto flex items-center justify-center my-[5rem]">
          <ProductClass
            title="Latest Collection"
            subtitle="Blossom into a New You!"
            tag="latest"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
