'use client';
import Image from 'next/image';
import React from 'react';
import img from '@/public/assets/reset.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const ResetPassword = () => {
const router = useRouter()
  return (
    <div className="flex h-screen w-screen justify-center items-center container mx-auto">
      <div className="flex items-center gap-20">
        <div className="max-md:hidden flex-1">
          <Image src={img} alt="Reset Password Illustration" className="-rotate-12 shadow-sm" />
        </div>
        <div className="flex-1 bg-white rounded-2xl px-9 py-10 border shadow flex flex-col gap-5">
          <p className="text-center font-semibold text-2xl">Forgot Password</p>
          <p className="text-center text-gray-600">
            No worries, we&apos;ll send you instructions for reset
          </p>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="bg-transparent border rounded-lg px-5 py-4 placeholder-black outline-none max-sm:py-3 max-sm:px-4"
                required
              />
            </div>
            <Button
              variant="outline"
              className="bg-brown w-full py-7 rounded-lg hover:bg-brown/80 text-white hover:text-white"
              type="submit"
            >
              Reset Password
            </Button>
            <Button onClick={() => (window.history.length > 1 ? router.back() : router.push('/'))} className="bg-transparent w-full py-7 text-black border border-black hover:bg-brown hover:text-white hover:border-transparent">
              Go Back
            </Button>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
