import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { BsExclamation } from 'react-icons/bs';

const Settings = () => {
  return (
    <div className="bg-white p-20 py-10 max-lg:px-12 max-md:px-6 max-lg:py-6 border shadow rounded-xl flex flex-col gap-6 mb-2 mt-1">
      <p className="font-semibold text-lg border-b pb-4">
        Personal Information
      </p>
      <div className="flex flex-col gap-6">
        <div className="border-b pb-4">
          <Image
            src={'https://github.com/shadcn.png'}
            alt="img"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
        <form action="" className="flex flex-col gap-6 border-b pb-4">
          <div className="flex items-center gap-6 max-lg:flex-col max-lg:gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                First Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Firstname"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                Last Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Lastname"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 max-lg:flex-col max-lg:gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                Email Address
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Email address"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                Phone Number
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Phone number"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 max-lg:flex-col max-lg:gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                Country
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Country"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="px-2">
                City
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="City"
                className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[50%] max-lg:w-full">
            <label htmlFor="" className="px-2">
              Postal Code
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="City"
              className="bg-gray-100 rounded-full px-5 py-3 placeholder-black outline-none"
            />
          </div>
          <Button className="bg-brown rounded-full px-5 py-5 hover:bg-brown/95 w-fit">
            Save
          </Button>
        </form>
        <div className="flex flex-col gap-4 p-7 max-md:py-5 max-md:px-4 rounded-3xl bg-gray-100 ">
          <p className="font-semibold">Delete Account</p>
          <div className="border p-2 rounded-full bg-white px-4 flex items-center gap-2">
            <div className="p-1 border border-black rounded-full">
              <BsExclamation size={22} />
            </div>
            After making a deletion , you will have 6 months to maintain
            account.
          </div>
          <p>
            To permanently erase your whole ProAcc account, click the button
            below. This implies that you won&apos;t have access to your
            enterprises, accounting and personal financial data
          </p>
          <Button className="bg-red-600 rounded-full px-5 py-5 hover:bg-red-600/80 w-fit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
