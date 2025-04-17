'use client';

import { Github, Mail, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function InfoSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Meet the Developer</h2>
        <p className="text-gray-600 text-lg">
          Hi! I'm <span className="font-semibold text-indigo-600">[Adrian Dave A, Escudero]</span>, the developer of this Student Tracking System. 
          Feel free to reach out or explore more of my work below!
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          <Link href="https://github.com/PotatoCodder" target="_blank" className="flex items-center text-gray-700 hover:text-black transition">
            <Github className="mr-2" /> GitHub
          </Link>
          <Link href="https://facebook.com/hikigaya09" target="_blank" className="flex items-center text-gray-700 hover:text-blue-600 transition">
            <Facebook className="mr-2" /> Facebook
          </Link>
          <a href="mailto:xidesadrian@gmail.com" className="flex items-center text-gray-700 hover:text-red-500 transition">
            <Mail className="mr-2" /> Gmail
          </a>
        </div>
      </div>
    </section>
  );
}
