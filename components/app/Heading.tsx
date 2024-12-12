import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Heading = () => {
  return (
    <div className="w-full mb-3 py-7 px-6 bg-white border-b shadow-sm sticky top-0 right-0 z-20 flex items-center justify-between">
      <p className="text-lg text-brown">Dashboard</p>
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 py-3 px-5 rounded-full flex items-center gap-3">
          <IoSearch />
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Heading;
