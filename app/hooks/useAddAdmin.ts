'use client';

import { useMutation } from '@tanstack/react-query';

export function useAddAdmin() {
  return useMutation({
    mutationFn: async(admin: {
      username: string,
      password: string,
    }) => {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin)
      })

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something Went Wrong");

      return data;
    },
  })
}