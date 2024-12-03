import React from 'react';

const CheckOut = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl">Checkout</h1>
      <div className="w-[50%] p-7 border flex flex-col gap-6">
        <h4>Billing Details</h4>
        <form action="" className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="FirstName"
                className="bg-gray-100 p-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="FirstName"
                className="bg-gray-100 p-3 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="FirstName"
              className="bg-gray-100 p-3 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="w-[50%]">
        
      </div>
    </div>
  );
};

export default CheckOut;
