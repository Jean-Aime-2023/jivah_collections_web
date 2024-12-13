import Heading from '@/components/app/Heading';
import Sidebar from '@/components/app/Sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col overflow-hidden">
        <Heading />
        <main className="flex-1 flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-50 overflow-y-auto">
          <ScrollArea className='example'>{children}</ScrollArea>
        </main>
      </div>
    </div>
  );
}
