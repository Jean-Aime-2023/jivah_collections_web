// Products.ts
// Products.ts
import { StaticImageData } from 'next/image';

export interface ColorOption {
  image: string | StaticImageData;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  crossedPrice: number;
  rating: number;
  image: string | StaticImageData; // Allow both string (URL) and StaticImport (Next.js static imports)
  tag: string;
  category: string;
  description: string;
  otherColors?: ColorOption[];
  relatedProducts: string[];
}

import img1 from '@/public/assets/jaquemus.jpg';
import cloth1 from '@/public/assets/cloth1.jpg';
import cloth2 from '@/public/assets/cloth2.jpg';
import cloth3 from '@/public/assets/cloth3.jpg';
import img2 from '@/public/assets/jc_compplete.jpg';
import img3 from '@/public/assets/lacoste t-shirt.jpg';
import img4 from '@/public/assets/small_bag.jpg';
import img5 from '@/public/assets/hoodie_o.jpg';
import img6 from '@/public/assets/jacket_o.jpg';
import img7 from '@/public/assets/t_shirt_w.jpg';
import img8 from '@/public/assets/vest_o.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'JAQUEMUS',
    price: 59.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img1,
    tag: 'bestselling',
    category: 'Women',
    description:
      'A high-quality, elegant dress designed for stylish occasions. Made from breathable fabric, it offers comfort and sophistication for any special event. Available in multiple sizes and colors.',
    relatedProducts: ['2', '3'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]
  },
  {
    id: 2,
    name: 'JC COMPLETE',
    price: 39.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img2,
    tag: 'bestselling',
    category: 'Men',
    description:
      'Comfortable and fashionable JC Complete outfit featuring a sleek design and versatile colors. Ideal for both casual and semi-formal settings, this set is perfect for everyday wear.',
    relatedProducts: ['1', '4'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 3,
    name: 'LACOSTE T-SHIRT',
    price: 19.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img3,
    tag: 'bestselling',
    category: 'Unisex',
    description:
      'Premium cotton t-shirt perfect for casual wear. Featuring the iconic Lacoste logo, it combines comfort, breathability, and timeless style. Available in multiple sizes for both men and women.',
    relatedProducts: ['2', '4'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 4,
    name: 'SMALL BAG',
    price: 129.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img4,
    tag: 'bestselling',
    category: 'Unisex',
    description:
      'A sleek and compact small bag made with premium materials. Ideal for carrying essentials, this stylish bag is perfect for both casual outings and more formal events. Available in multiple colors.',
    relatedProducts: ['2', '4'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 5,
    name: 'HOODI O',
    price: 129.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img5,
    tag: 'latest',
    category: 'Unisex',
    description:
      'An ultra-comfortable hoodie designed for both warmth and style. Made from a soft cotton blend, it’s perfect for layering or casual wear. Available in a variety of colors.',
    relatedProducts: ['1', '6'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 6,
    name: 'JACKET O',
    price: 129.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img6,
    tag: 'latest',
    category: 'Unisex',
    description:
      'A stylish and versatile jacket that can be dressed up or down. Crafted from durable materials, it’s designed for both comfort and functionality. Perfect for transitioning between seasons.',
    relatedProducts: ['2', '4'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 7,
    name: 'T-SHIRT',
    price: 129.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img7,
    tag: 'latest',
    category: 'Unisex',
    description:
      'A premium cotton t-shirt perfect for a relaxed, stylish look. Soft to the touch and breathable, it’s designed for all-day comfort while maintaining a casual yet fashionable appearance.',
    relatedProducts: ['8', '5'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },
  {
    id: 8,
    name: 'VEST O',
    price: 129.99,
    crossedPrice: 75.99,
    rating: 3,
    image: img8,
    tag: 'latest',
    category: 'Unisex',
    description:
      'A modern, stylish vest made with high-quality fabric. Perfect for layering, this piece adds a touch of flair to any outfit. Available in multiple colors to suit various preferences.',
    relatedProducts: ['2', '4'],
    otherColors: [
      { image: cloth1, color: "Red" },
      { image: cloth2, color: "Blue" },
      { image: cloth3, color: "Green" }
    ]  },

  // Add more products similarly...
];
