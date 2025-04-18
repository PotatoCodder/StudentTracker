'use client';
import { use } from 'react'

export default function page({ params }: { params:Promise<{ name: string}> }) {
  const { name } = use(params);

  return (
    <div>
      welcome {name}
    </div>
  )
}
