'use client';

import React, { useState } from 'react';
import { Product, ColorOption } from '@/constants/Products';

const CreateProductForm: React.FC = () => {
  const [product, setProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    crossedPrice: 0,
    rating: 0,
    image: '',
    tag: '',
    category: '',
    description: '',
    otherColors: [],
    relatedProducts: [],
  });
  const [inStock, setInStock] = useState<boolean>(true); // New field: In Stock
  const [colorOptions, setColorOptions] = useState<ColorOption[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddColorOption = () => {
    setColorOptions([
      ...colorOptions,
      { image: '', color: '' }, // Add a new empty color option
    ]);
  };

  const handleColorOptionChange = (
    index: number,
    field: keyof ColorOption,
    value: string
  ) => {
    const updatedOptions = [...colorOptions];
    updatedOptions[index] = { ...updatedOptions[index], [field]: value };
    setColorOptions(updatedOptions);
    setProduct({ ...product, otherColors: updatedOptions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...product, inStock }); // Add In Stock field to product
    // Send the data to your backend or handle the form submission logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-20 py-10 max-lg:px-12 max-md:px-6 max-lg:py-6 flex flex-col gap-4 mx-auto mb-3 mt-1 bg-white w-full border shadow rounded-2xl"
    >
      <h2 className="text-xl font-bold mb-4">Create a New Product</h2>

      {/* Name */}
      <div className="max-lg:flex-col flex gap-5 items-center">
        <div className="input-div">
          <label className="block mb-2 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="product-input"
            required
          />
        </div>

        {/* Price */}
        <div className="input-div">
          <label className="block mb-2 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="product-input"
            required
          />
        </div>
      </div>

      <div className="max-lg:flex-col flex gap-5 items-center">
        {/* Crossed Price */}
        <div className="input-div">
          <label className="block mb-2 font-medium">Crossed Price</label>
          <input
            type="number"
            name="crossedPrice"
            value={product.crossedPrice}
            onChange={handleInputChange}
            className="product-input"
          />
        </div>

        {/* Rating */}
        <div className="input-div">
          <label className="block mb-2 font-medium">Rating</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            className="product-input"
            min="1"
            max="5"
          />
        </div>
      </div>

      {/* Image */}
      <div className="input-div">
        <label className="block mb-2 font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          value={product.image as string}
          onChange={handleInputChange}
          className="product-input"
        />
      </div>

      <div className="max-lg:flex-col flex gap-5 items-center">
        {/* Tag */}
        <div className="input-div">
          <label className="block mb-2 font-medium">Tag</label>
          <select
            name="tag"
            value={product.tag}
            onChange={handleInputChange}
            className="product-input"
          >
            <option value="">Select Tag</option>
            <option value="bestselling">Bestselling</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* Category */}
        <div className="input-div">
          <label className="block mb-2 font-medium">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="product-input"
          >
            <option value="">Select Category</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="input-div">
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          className="product-input"
          rows={4}
        />
      </div>

      {/* In Stock */}
      <div className="input-div flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
          className="h-5 w-5"
        />
        <label className="block mb-2 font-medium mt-2">In Stock</label>
      </div>

      {/* Other Colors */}
      <div className="input-div">
        <label className="block mb-2 font-medium">Color Options</label>
        {colorOptions.map((option, index) => (
          <div key={index} className="input-div">
            <input
              type="text"
              placeholder="Color"
              value={option.color}
              onChange={(e) =>
                handleColorOptionChange(index, 'color', e.target.value)
              }
              className="product-input"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={option.image as string}
              onChange={(e) =>
                handleColorOptionChange(index, 'image', e.target.value)
              }
              className="product-input my-2 mt-3"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddColorOption}
          className="px-4 py-3 my-3 mb-4 bg-brown rounded-full text-white"
        >
          Add Color Option
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="px-4 py-3 bg-brown text-white rounded-full"
      >
        Create Product
      </button>
    </form>
  );
};

export default CreateProductForm;
