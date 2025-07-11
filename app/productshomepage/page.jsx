'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      if (!user)
        {
            toast.error('Please login to access this page.');
            router.push('/login');
        } 

    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://6870df567ca4d06b34b87017.mockapi.io/product');
        setProducts(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error('Error fetching products', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    fetchProducts();
  }, [router]);

  // Filter logic
  useEffect(() => {
    let filteredData = products.filter((product) => {
      const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category ? product.category === category : true;
      const matchPrice = +product.price >= priceRange[0] && +product.price <= priceRange[1];
      return matchSearch && matchCategory && matchPrice;
    });

    setFiltered(filteredData);
  }, [search, category, priceRange, products]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-100"
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <h1 className="text-2xl font-bold">🛍️ Products</h1>
        <input
          type="text"
          placeholder="Search product..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex">
        {/* Sidebar Filters */}
        <div className="hidden md:block w-64 p-6 bg-white border-r">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Category</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Price Range</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, +e.target.value])}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-1">Under ₹{priceRange[1]}</p>
          </div>
        </div>

        {/* Products Grid */}
        <main className="flex-1 p-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{filtered.map((product, index) => (
  <Link href={`/productshomepage/${product.id}`} key={product.id}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
    >
      <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
        <Image
          src={product.avatar}
          alt={product.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="mt-2 text-gray-700 text-sm">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold text-black">₹{product.price}</span>
        <span className="text-sm text-gray-500">Stock: {product.stock}</span>
      </div>
    </motion.div>
  </Link>
))}
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
}

// Skeleton Loader
function SkeletonCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow p-4 animate-pulse"
    >
      <div className="w-full h-48 bg-gray-300 rounded-md mb-4 shimmer" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-2" />
      <div className="h-3 bg-gray-300 rounded w-full mb-2" />
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 bg-gray-300 rounded w-16" />
        <div className="h-4 bg-gray-300 rounded w-12" />
      </div>
    </motion.div>
  );
}
