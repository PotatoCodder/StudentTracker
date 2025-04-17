'use client'

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import InfoSection from './Infosection';
import FeedbackSection from './FeedbackSection';

interface prop {
    children: React.ReactNode
}

export default function LayoutWrapper({children}: prop) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <Sidebar />
      {pathname === '/' && (
      <>
        <Hero />
        <FeedbackSection />
      </>
      )}
      {children}
      <InfoSection />
    </>
  )
}
