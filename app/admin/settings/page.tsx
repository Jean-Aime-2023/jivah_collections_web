'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { BsExclamation } from 'react-icons/bs';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const router = useRouter()
  const [confirmation, setConfirmation] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setConfirmation(value);
    if (value === 'DELETE ACCOUNT') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const [selectedImage, setSelectedImage] = useState<string | null>(
    'https://github.com/shadcn.png'
  );
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <div className="bg-white p-20 py-10 max-lg:px-12 max-md:px-6 max-lg:py-6 border shadow rounded-xl flex flex-col gap-6 mb-2 mt-1">
      <p className="font-semibold text-lg border-b pb-4">
        Personal Information
      </p>
      <div className="flex flex-col gap-6">
        <div className="border-b w-full flex justify-between items-center pb-4">
          <div className="w-fit relative">
            <Image
              src={selectedImage || ''}
              alt="Profile"
              width={90}
              height={90}
              className="rounded-full"
            />
            <div
              className="p-2 bg-brown rounded-full hover:bg-brown/80 absolute -right-2 bottom-0 cursor-pointer hover:transition-transform hover:scale-105"
              onClick={() => document.getElementById('fileUpload')?.click()}
            >
              <Camera color="white" />
            </div>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <Button onClick={()=>router.push('/resetpassword')} className="bg-brown rounded-full px-5 py-5 hover:bg-brown/80 w-fit">
            Reset Password
          </Button>
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
        <div className="flex flex-col gap-4 p-7 max-md:py-5 max-md:px-4 rounded-3xl bg-gray-100">
          <p className="font-semibold">Delete Account</p>
          <div className="border p-2 rounded-full bg-white px-4 flex items-center gap-2">
            <div className="p-1 border border-black rounded-full">
              <BsExclamation size={22} />
            </div>
            After making a deletion, you will have 6 months to maintain your
            account.
          </div>
          <p>
            To permanently erase your whole ProAcc account, click the button
            below. This implies that you won&apos;t have access to your
            enterprises, accounting, and personal financial data.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600 rounded-full px-5 py-5 hover:bg-red-600/80 w-fit">
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-10">
              <DialogHeader>
                <DialogTitle>Confirm Account Deletion</DialogTitle>
                <DialogDescription>
                  Are you sure you want to permanently delete your account? This
                  action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <p className="text-red-500">
                  Warning: This will permanently erase all your data.
                </p>
                <Label htmlFor="confirmDelete">
                  Type &quot;DELETE ACCOUNT&quot; to confirm:
                </Label>
                <Input
                  id="confirmDelete"
                  type="text"
                  value={confirmation}
                  onChange={handleInputChange}
                  placeholder="Type DELETE ACCOUNT"
                  className="bg-transparent border border-black rounded-full px-5 py-3"
                />
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full"
                  >
                    Close
                  </Button>
                </DialogClose>
                <Button
                  type="button"
                  className="bg-red-600 rounded-full px-5 py-3"
                  disabled={isDisabled}
                >
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Settings;
