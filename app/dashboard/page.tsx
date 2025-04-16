'use client'

import { useGetStudents } from '@/app/hooks/useGetStudent';

export default function StudentList() {
  const { data, isLoading, isError, error} = useGetStudents();

  if (isLoading) return <p className='text-center'>Loading...</p>
  if (isError) return <p className='text-red-500 txt-center' >{(error as Error).message}</p>

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 bg-white shadow rounded">
       <h2 className="text-xl font-bold mb-4">Student List</h2>
       {data.length === 0? (
         <p>No student found</p>
       ): (
          <ul className="space-y-2">
            {data.map((student: any) => (
              <li key={student._id} className="p-3 border rounded-md shadow-sm">
                <p><strong>Name: </strong>{student.fullName}</p>
                <p><strong>Age: </strong>{student.age}</p>
                <p><strong>Section: </strong>{student.section}</p>
                <p><strong>GPA: </strong>{student.gpa}</p>
              </li>
            ))}
          </ul>
       )}
    </div>
  )
}
