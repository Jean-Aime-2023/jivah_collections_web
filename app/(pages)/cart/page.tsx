"use client"
import CartProduct from '@/components/app/CartProduct';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Cart = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto py-10 flex max-lg:flex-col gap-7">
      <div className="w-[70%] max-lg:w-full max-lg:px-7">
        <h1 className="text-4xl pb-5">Cart</h1>
        <div className="border shadow-md rounded-xl p-7 max-lg:p-5">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </div>
      <div className="w-[30%] max-lg:w-full max-lg:px-7">
        <h1 className="text-4xl pb-5">Cart Totals</h1>
        <div className="border shadow-md rounded-xl p-7">
          <div className="flex items-center justify-between py-4 border-b">
            <p>Subtotal</p>
            <p>Fr 145.000</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <p>Shipping</p>
            <p className="w-[8rem]">
              No shipping options were found for Saint Barthélemy.
            </p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <p>Total</p>
            <p>Fr 145.000</p>
          </div>
          <Button
            onClick={() => router.push('/checkout')}
            className="bg-brown hover:bg-amber-600 rounded-md text-white tracking-widest py-8 w-full my-4"
          >
            PROCEED TO CHECKOUT
          </Button>
          <Button
            onClick={() => router.push('/shop')}
            className="bg-transparent border hover:border-transparent hover:bg-brown hover:text-white rounded-md mb-4 text-brown tracking-widest py-8 w-full"
          >
            CONTINUE SHOPPING
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
