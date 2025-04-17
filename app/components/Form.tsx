'use client';
import { useState } from 'react';
import { useAddStudent } from '@/app/hooks/useAddStudent';

export default function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    section: '',
    gpa: ''
  });

  const { mutate, isPending, isSuccess, isError, error } = useAddStudent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        alert('Student added successfully');
        setFormData({
          fullName: '',
          age: '',
          section: '',
          gpa: ''
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr ">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Add New Student</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Section</label>
            <input
              type="text"
              name="section"
              placeholder="Enter section"
              value={formData.section}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">GPA</label>
            <input
              type="text"
              name="gpa"
              placeholder="Enter GPA"
              value={formData.gpa}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
          >
            {isPending ? 'Submitting...' : 'Add Student'}
          </button>

          {isError && <p className="text-red-500 text-center">{(error as Error).message}</p>}
          {isSuccess && <p className="text-green-500 text-center">Student Added Successfully!</p>}
        </form>
      </div>
    </div>
  );
}
