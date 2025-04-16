'use client'
import { useState } from 'react'
import { useAddStudent } from '@/app/hooks/useAddStudent';

export default function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    section: '',
    gpa: ''
  })

  const { mutate, isPending, isSuccess, isError, error} = useAddStudent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData, {
      onSuccess: () => {
        alert('student added successfully')
        setFormData(
          {
            fullName: '',
            age: '',
            section: '',
            gpa: ''
          }
        )
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-6">
      <input 
        type="text"
        name='fullName'
        placeholder='Full Name'
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border rounded" 
      />

      <input 
        type="text"
        name='age'
        placeholder='Age'
        value={formData.age}
        onChange={handleChange}
        className="w-full p-2 border rounded"
       />

       <input 
        type="text"
        name='section'
        placeholder='Section'
        value={formData.section}
        onChange={handleChange}
        className="w-full p-2 border rounded"
       />

       <input 
        type="text" 
        name='gpa'
        placeholder='GPA'
        value={formData.gpa}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button type='submit' disabled={isPending} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        {isPending? 'submitting...': 'Add Student'}
      </button>

      {isError && <p className='text-red-500'>{(error as Error).message}</p>}
      {isSuccess && <p className='text-green-500'>Student Added Successfulyy!</p>}
    </form>
  )
}
