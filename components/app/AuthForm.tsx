'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import logo from '@/public/assets/logo.png';
import { Button } from '../ui/button';
import google from '@/public/assets/google.png';
import facebook from '@/public/assets/facebook.png';
import apple from '@/public/assets/apple.png';
import Link from 'next/link';

const logos = [
  { id: 1, name: 'Google', img: google },
  { id: 2, name: 'Facebook', img: facebook },
  { id: 3, name: 'Apple', img: apple },
];

const AuthForm = ({ isSignIn }: { isSignIn: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Ensures this runs only on the client
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      setIsLoading(false);

      if (!isSignIn) {
        // Navigate to home on successful registration
        router.push('/sign-in');
      } else {
        // Handle login logic here
        router.push('/home');
      }
    }, 2000);
  };

  if (!isMounted) return null; // Prevent rendering during SSR

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" height={60} width={60} />
        <h4 className="text-xl text-brown font-medium max-md:text-lg">JIVAH COLLECTIONS</h4>
      </div>

      {/* Titles */}
      <h3 className="font-semibold text-4xl max-sm:text-xl">
        {isSignIn ? 'Welcome Back' : 'Welcome'}
      </h3>
      <p className="text-gray-500">
        {isSignIn ? 'Please login to your account' : 'Create your account'}
      </p>

      <form className="w-full">
        <div className="flex flex-col gap-3 w-full">
          {!isSignIn && (
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-gray-100 rounded-lg px-5 py-4 placeholder-black outline-none max-sm:py-3 max-sm:px-4"
            />
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="bg-gray-100 rounded-lg px-5 py-4 placeholder-black outline-none max-sm:py-3 max-sm:px-4"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="bg-gray-100 rounded-lg px-5 py-4 placeholder-black outline-none max-sm:py-3 max-sm:px-4"
          />
          {!isSignIn && (
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="bg-gray-100 rounded-lg px-5 py-4 placeholder-black outline-none max-sm:py-3 max-sm:px-4"
            />
          )}
          {isSignIn && (
            <p className="text-right cursor-pointer">Forgot Password?</p>
          )}
        </div>

        <Button
          className="w-full py-7 max-sm:py-5 bg-brown rounded-lg my-6 hover:bg-[#db9744]"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </div>
          ) : isSignIn ? (
            'Login'
          ) : (
            'Register'
          )}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-2 w-[90%] max-md:w-full">
        <hr className="border border-gray-300 w-[30%]" />
        <p className="text-gray-500 text-xs">
          {isSignIn ? 'Or Login With' : 'Or Signup With'}
        </p>
        <hr className="border border-gray-300 w-[30%]" />
      </div>

      <div className="flex items-center gap-3 w-full my-3">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="border rounded-lg py-3 flex gap-1 justify-center items-center flex-1 cursor-pointer"
          >
            {logo.id===3?<Image src={logo.img} alt="logo" width={40} height={40} />:<Image src={logo.img} alt="logo" width={20} height={20} />}
            <p className="text-xs max-sm:hidden">{logo.name}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-500">
        {isSignIn ? (
          <>
            Don’t have an account?{' '}
            <Link href="/sign-up" className="text-brown underline">
              Signup
            </Link>
          </>
        ) : (
          <>
            Have an account?{' '}
            <Link href="/sign-in" className="text-brown underline">
              Signin
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
