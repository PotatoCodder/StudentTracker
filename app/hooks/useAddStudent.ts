'use client';

import { useMutation } from '@tanstack/react-query';

export function useAddStudent() {
  return useMutation({
    mutationFn: async (student: {
      fullName: string,
      age: string,
      section: string,
      gpa: string

    }) => {
        const res = await fetch('api/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(student),
        })

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'something went wrong');
        return data;
    },
  })
}