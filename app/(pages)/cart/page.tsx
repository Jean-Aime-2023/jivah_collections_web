'use client';
import CartProduct from '@/components/app/CartProduct';
import { Button } from '@/components/ui/button';
import Aos from 'aos';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

const initialCartProducts = [
  { id: 1, name: 'Lacoste T-Shirt', price: 50 },
  { id: 2, name: 'Small Bag', price: 129.99 },
  { id: 3, name: 'JC Complete', price: 39.99 },
  { id: 4, name: 'Hoodie O', price: 129.99 },
];

const Cart = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const router = useRouter();
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const handleRemoveProduct = (id: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  return (
    <div
      data-aos="fade-right"
      className="container mx-auto py-10 flex max-lg:flex-col gap-7"
    >
      <div className="w-[60%] max-lg:w-full max-lg:px-7">
        <h1 className="text-4xl pb-5">Cart</h1>
        <div className="border shadow-md rounded-xl p-7 max-lg:p-5">
          {cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              onRemove={handleRemoveProduct}
            />
          ))}
        </div>
      </div>
      <div className="w-[30%] max-lg:w-full max-lg:px-7">
        <h1 className="text-4xl pb-5">Cart Totals</h1>
        <div className="border shadow-md rounded-xl p-7">
          <div className="flex items-center justify-between py-4 border-b">
            <p>Subtotal</p>
            <p>
              $
              {cartProducts
                .reduce((total, product) => total + product.price, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <p>Shipping</p>
            <p>
              $ 20
            </p>
          </div>
          <Button
            onClick={() => router.push('/checkout')}
            className="bg-brown hover:bg-amber-600 rounded-md text-white tracking-widest py-8 w-full my-4 max-lg:py-6 button"
          >
            PROCEED TO CHECKOUT
          </Button>
          <Button
            onClick={() => router.push('/shop')}
            className="bg-transparent border hover:border-transparent hover:bg-brown hover:text-white rounded-md max-lg:py-6 mb-4 text-brown tracking-widest py-8 w-full"
          >
            CONTINUE SHOPPING
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
