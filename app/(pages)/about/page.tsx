import React from 'react';
import bgimg from '@/public/assets/shoe.png';
import { FaCaretRight } from 'react-icons/fa';
import img from '@/public/assets/hero.jpg';
import Image from 'next/image';
import fila from '@/public/assets/filalogo.jpg';
import adidas from '@/public/assets/adidaslogo.jpg';
import chanel from '@/public/assets/chanellogo.jpg';
import nike from '@/public/assets/nikelogo.jpg';
import gucci from '@/public/assets/guccilogo.jpg';
import { FaDivide } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { AiOutlineFileProtect } from 'react-icons/ai';

const service1 = [
  { id: 1, name: 'Fashion Collections' },
  { id: 2, name: 'Customization' },
];
const service2 = [
  { id: 1, name: 'Delivery Services' },
  { id: 2, name: 'E-Commerce' },
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

const About = () => {
  return (
    <div>
      <div
        className="relative w-full h-[330px] bg-cover bg-center bg-no-repeat text-gray-500 text-lg"
        style={{ backgroundImage: `url(${bgimg.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#e8b761]/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <h1 className="text-7xl text-white">About Us</h1>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center w-fit">
        <div className="w-[40%] flex flex-col gap-4">
          <p className="text-brown text-lg">
            Delivering Fashion Solutions to Elevate Your Style and Convenience.
          </p>
          <h5 className="text-2xl text-black">Let&apos;s Talk about us</h5>
          <p>
            At JIVAH COLLECTION LTD, we believe in offering innovative fashion
            solutions that enhance both individual style and convenience in
            today’s fast-paced world. Our offerings are designed to make
            shopping easier, more accessible, and more enjoyable, whether
            in-store or online, while delivering efficiency and quality to our
            customers.
          </p>
          <p>Our Services</p>
          <div className="flex items-center w-full gap-6">
            <div className="flex flex-col gap-2">
              {service1.map((service) => (
                <div key={service.id} className="flex items-center gap-1">
                  <FaCaretRight color="#eba046" />
                  <p>{service.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {service2.map((service) => (
                <div key={service.id} className="flex items-center gap-1">
                  <FaCaretRight color="#eba046" />
                  <p>{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image src={img} alt="img" height={620} />
      </div>

      <div className="bg-[#fff7ed] py-[5rem] text-left">
        <div className="container mx-auto flex flex-col gap-7">
          <h3 className="text-black text-3xl">Who We Are</h3>
          <p>
            At JIVAH COLLECTION LTD, we are dedicated to delivering top-tier
            fashion solutions that meet and exceed our customers&apos;
            expectations. With a diverse collection of clothing, shoes and
            accessories, we serve clients across Rwanda with the highest level
            of customer service and quality. Our mission is to make fashion
            accessible, efficient, and tailored to your lifestyle. Whether
            you&apos;re shopping for casual wear, special occasions, or
            statement accessories, our platform ensures a seamless and
            personalized shopping experience, backed by prompt delivery services
            and a commitment to excellence.
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-center my-[7rem]">
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
      </div>
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
    </div>
  );
};

export default About;
