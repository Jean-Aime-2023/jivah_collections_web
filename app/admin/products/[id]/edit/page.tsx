'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { products } from '@/constants/Products';
import Image from 'next/image';
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
import { Button } from '@/components/ui/button';
import { CloudUpload } from 'lucide-react';

const EditProduct = () => {
  const router = useRouter();
  const params = useParams(); // Access route parameters
  const numericId = params?.id ? Number(params.id) : null;

  const product = numericId
    ? products.find((product) => product.id === numericId)
    : null;

  const [formData, setFormData] = useState(
    product || {
      id: 0,
      name: '',
      price: 0,
      category: '',
      description: '',
      image: '', // Default value for the image
      rating: 0,
      tag: '',
    }
  );

  if (!product) {
    return (
      <div>Product not found. Please check the product ID in the URL.</div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated product:', formData);
    router.push('/admin/products');
  };

  return (
    <div className="p-20 py-10 max-lg:px-12 max-md:px-6 max-lg:py-6 flex flex-col gap-4 mx-auto mb-3 mt-1 bg-white w-full border shadow rounded-2xl">
      <h1 className="text-2xl font-bold input-div">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="max-lg:flex-col flex gap-5 items-center">
          <div className="input-div">
            <label className="block font-bold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="product-input"
            />
          </div>
          <div className="input-div">
            <label className="block font-bold mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="product-input"
            />
          </div>
        </div>
        <div className="input-div">
          <label className="block font-bold mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="product-input"
          />
        </div>
        <div className="input-div">
          <label className="block font-bold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="product-input"
          ></textarea>
        </div>
        <div className="input-div">
          <label className="block font-bold mb-1">Image</label>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline"><CloudUpload /> Upload Image</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  Upload Image
                </DialogTitle>
                <DialogDescription>
                  Choose an image to upload for this product.
                </DialogDescription>
              </DialogHeader>
              <div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="product-input"
                />
              </div>
              {formData.image && (
                <div className="mt-2">
                  <Image
                    src={formData.image}
                    alt="Product Preview"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              )}
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                  {/* <Button type="button">
                    Save
                  </Button> */}
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="input-div">
          <label className="block font-bold mb-1">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="product-input"
          />
        </div>
        <div className="input-div">
          <label className="block font-bold mb-1">Tag</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="product-input"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-brown text-white rounded-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
