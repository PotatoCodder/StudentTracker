'use client';

import { useQuery } from '@tanstack/react-query';

export function useGetStudents() {

  const fetchStudents = async () => {
    const res = await fetch('api/students');
    const data = await res.json();

    if(!res.ok) throw new Error(data.error || 'Failed to Fetch Students')
    return data.students
  }

  return(
    useQuery({
      queryKey: ['student'],
      queryFn: fetchStudents
    })
  )
}