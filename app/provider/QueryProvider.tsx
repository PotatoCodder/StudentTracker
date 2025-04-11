'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface Prop {
  children: React.ReactNode;
}

export default function QueryProvider({children}: Prop) {
  const [client] = useState(() => new QueryClient()); //shortcut way kesa e separate ang pag himo sa client useState og pag declare sa QueryClient

  return(
    <QueryClientProvider client={client}>
     {children}
    </QueryClientProvider>
  )
}