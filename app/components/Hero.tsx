'use client';

import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Smart Student Tracking Made Easy
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            REQ<span className="text-indigo-600">&</span>GO helps you manage, track, and analyze student records efficiently.
          </p>

          <Link
            href="/student-form"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Right Icon or Image */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white p-8 rounded-full shadow-lg">
            <GraduationCap className="w-20 h-20 text-indigo-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
