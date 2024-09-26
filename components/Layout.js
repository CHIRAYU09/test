// components/Layout.js
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Layout = ({ children }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryClick = () => {
    setIsProductsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-300 text-white relative z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link legacyBehavior href="/">
              <a className="flex items-center">
                <Image
                  src="/Logo.png"  // Replace with your actual logo path
                  alt="Brand Logo"
                  width={50}
                  height={50}
                />
                

              </a>
            </Link>
            <ul className="flex space-x-4">
              <li className="relative group" ref={dropdownRef}>
                <button 
                  className="flex items-center"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products <ChevronDownIcon className="ml-1 h-5 w-5" />
                </button>
                {isProductsOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                    <li>
                      <Link href="/products/scented-candles"
                         className="block px-4 py-2 hover:bg-green-100" onClick={handleCategoryClick}>Scented Candles
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/car-fresheners"
                        className="block px-4 py-2 hover:bg-green-100" onClick={handleCategoryClick}>Car Fresheners
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/wardrobe-fresheners"
                         className="block px-4 py-2 hover:bg-green-100" onClick={handleCategoryClick}>Wardrobe Fresheners
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex-grow relative">
        {children}
      </main>
      <footer className="bg-gray-200 py-4">
        <p className="text-center text-gray-600">© 2023 Breathe In. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;