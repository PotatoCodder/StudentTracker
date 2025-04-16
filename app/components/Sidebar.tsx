'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger menu button - only show when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="p-2 m-4 fixed top-15 left-3 z-[60] bg-white rounded-full shadow-md cursor-pointer"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-50 flex flex-col"
          >
            {/* Close button inside sidebar */}
            <button onClick={handleOpen} className="self-end mb-8 cursor-pointer">
              <X size={28} />
            </button>

            {/* Navigation links */}
            <ul className="space-y-6 text-lg font-medium">
              <li>
                <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
              </li>
              <li>
                <Link href="/student-form" className="hover:text-indigo-600">Form</Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-indigo-600">Admin</Link>
              </li>
              <li>
                <Link href="/settings" className="hover:text-indigo-600">Settings</Link>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
