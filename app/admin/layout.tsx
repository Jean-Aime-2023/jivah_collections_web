import Heading from '@/components/app/Heading';
import Sidebar from '@/components/app/Sidebar';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="flex-1 w-[80%] max-lg:w-[85%] bg-gray-50 relative">
        <Heading/>
        {children}
      </main>
    </div>
  );
}
