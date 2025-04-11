'use client';
import { Rocket } from 'lucide-react'; // You can replace this icon with anything

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-start">
        <div className="flex items-center space-x-2">
          <Rocket className="text-indigo-600 w-6 h-6" />
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            REQ<span className="text-indigo-600">&</span>GO
          </h1>
        </div>
      </div>
    </nav>
  );
}
