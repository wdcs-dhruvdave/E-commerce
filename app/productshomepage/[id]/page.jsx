'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://6870df567ca4d06b34b87017.mockapi.io/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Product not found');
        router.push('/products');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, router]);

  if (loading) {
    return <div className="p-10 text-center text-gray-500">Loading product...</div>;
  }

  if (!product) {
    return <div className="p-10 text-center text-red-500">Product not found.</div>;
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col md:flex-row gap-10 items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Product Image */}
      <Breadcrumbs />
      <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
        <div className="relative w-full h-96">
          <Image
            src={product.avatar}
            alt={product.title}
            fill
            className="object-contain rounded-md"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <p className="text-gray-700">{product.description}</p>

        <div className="text-2xl font-bold text-black mt-4">₹{product.price}</div>
        <div className="text-sm text-gray-500">Stock: {product.stock}</div>

        <button
          onClick={() => alert('Added to cart')}
          className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
