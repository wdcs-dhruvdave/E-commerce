'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <nav className="bg-white border-b shadow px-6 py-4 flex justify-between items-center">
        <Link href="/">
      <h1 className="text-xl font-bold text-black">E-Shop</h1>
      </Link>
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/">
          <li className="hover:text-black cursor-pointer">Home</li>
        </Link>
        <Link href="/productshomepage">
          <li className="hover:text-black cursor-pointer">Products</li>
        </Link>

        {isLoggedIn ? (
          <>
            <Link href="/cart">
              <li className="hover:text-black cursor-pointer">Cart</li>
            </Link>
            <li
              onClick={handleLogout}
              className="hover:text-black cursor-pointer"
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <Link href="/login">
              <li className="hover:text-black cursor-pointer">Login</li>
            </Link>
            <Link href="/register">
              <li className="hover:text-black cursor-pointer">Register</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
