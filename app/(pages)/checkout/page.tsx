'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import urubutoImg from '@/public/assets/urubuto.png';
import mtn from '@/public/assets/mtn.png';
import airtel from '@/public/assets/airtel.png';
import visa from '@/public/assets/visa.png';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

// List of countries
const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'in', label: 'India' },
  { value: 'au', label: 'Australia' },
];

const CheckOut = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [comments, setComments] = useState('');
  const [locationDes, setLocationDes] = useState('');

  const handleCountryChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCountry(e.target.value);
    console.log('Selected Country:', e.target.value);
  };

  const handleCommentsChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComments(e.target.value);
    console.log('Comments:', e.target.value);
  };
  const handlelocationDesc = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLocationDes(e.target.value);
    console.log('LocationDesc:', e.target.value);
  };
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (e: { target: { value: string } }) => {
    setSelectedPayment(e.target.value);
    console.log('Selected Payment Method:', e.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-left" className="container mx-auto flex gap-20 my-[3rem] max-lg:flex-col max-lg:justify-center max-lg:items-center">
      <div className="w-[50%] max-lg:w-[96%] p-7 border flex flex-col gap-6 rounded-lg shadow">
        <h4 className="font-semibold">Billing Details</h4>
        <form action="" className="w-full flex flex-col gap-4">
          <div className="w-full flex max-lg:flex-col gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="FirstName"
                className="bg-gray-100 p-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="LastName"
                className="bg-gray-100 p-3 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="bg-gray-100 p-3 outline-none"
            />
          </div>
          {/* Country Selector */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="country-selector">Country</label>
            <select
              id="country-selector"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="bg-gray-100 p-3 outline-none"
            >
              <option value="" disabled>
                -- Select Country --
              </option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          {/* Textarea for Comments */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="comments">Address</label>
            <textarea
              id="location"
              placeholder="More details on location description"
              value={locationDes}
              onChange={handlelocationDesc}
              className="bg-gray-100 p-3 outline-none h-32 resize-none"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className="bg-gray-100 p-3 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="comments">Order Notes(optional)</label>
            <textarea
              id="comments"
              placeholder="Enter any special instructions or comments here..."
              value={comments}
              onChange={handleCommentsChange}
              className="bg-gray-100 p-3 outline-none h-32 resize-none"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="w-[50%] max-lg:w-[96%] p-7 border flex flex-col gap-6 rounded-lg shadow text-gray-500">
        <h4 className="font-semibold">Your Order</h4>
        <div className="w-full flex flex-col gap-4 border-b pb-7">
          <div className="flex items-center justify-between text-black">
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          <div className="flex items-center justify-between text-black">
            <p>Vest O × 1</p>
            <p>Fr 25.000</p>
          </div>
          <div className="flex items-center justify-between text-black">
            <p>ABBIATI × 2</p>
            <p>Fr 120.000</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>Fr 145.000</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping</p>
            <p className="text-right w-[15rem]">
              There are no shipping options available. Please ensure that your
              address has been entered correctly, or contact us if you need any
              help.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>Fr 145.000</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b pb-7">
          <p>
            Have a coupon?{' '}
            <span className="text-brown">
              Click here to enter your coupon code
            </span>
          </p>
          <p>If you have a coupon code, please apply it below.</p>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="bg-gray-100 p-3 outline-none"
              />
            </div>
            <Button className="button tracking-widest border border-blue-600 text-blue-600 bg-transparent p-6 max-lg:p-4 hover:bg-blue-600 hover:text-white">
              APPLY
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-7">
          <Image src={urubutoImg} alt="img" />
          <div className="bg-slate-50 rounded-md p-4 flex flex-col gap-3">
            <p>Choose A Payment Mode</p>
            {/* display a radio btn and images of companies */}
            <div className="flex items-center gap-4">
              {/* Airtel Payment */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="airtel"
                  checked={selectedPayment === 'airtel'}
                  onChange={handlePaymentChange}
                  className="h-5 w-5"
                />
                <Image src={airtel} alt="Airtel Logo" width={50} height={50} />
              </label>
              {/* MTN Payment */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mtn"
                  checked={selectedPayment === 'mtn'}
                  onChange={handlePaymentChange}
                  className="h-5 w-5"
                />
                <Image src={mtn} alt="MTN Logo" width={50} height={50} />
              </label>
              {/* Visa Payment */}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  checked={selectedPayment === 'visa'}
                  onChange={handlePaymentChange}
                  className="h-5 w-5"
                />
                <Image src={visa} alt="Visa Logo" width={50} height={50} />
              </label>
            </div>
            {/* either airtel , mtn or visa */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="bg-gray-200 p-3 outline-none"
              />
            </div>
          </div>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <span className="text-brown">privacy policy.</span>
          </p>
          <Button className="tracking-widest bg-brown w-full text-white rounded">
            PLACE ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
