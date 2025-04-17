'use client';

import { useState } from 'react';
import { useAdminLogin } from '@/app/hooks/useAdminLogin';

export default function AdminLoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { mutate, isPending, isError, error, isSuccess, data } = useAdminLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          {isPending ? 'Logging in...' : 'Login'}
        </button>

        {isError && <p className="text-red-500 text-center mt-2">{(error as Error).message}</p>}
        {isSuccess && <p className="text-green-500 text-center mt-2">{data.message}</p>}
      </form>
    </div>
  );
}
