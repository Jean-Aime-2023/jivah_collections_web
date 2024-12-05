'use client'; // Marks this file as a Client Component

import Footer from '@/components/app/Footer';
import Header from '@/components/app/Header';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scroll position is greater than the viewport height
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div id="footer">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed right-3 bottom-[10px]"
        >
          <div className="md:w-[80px] md:h-[80px] w-[40px] h-[40px] bg-brown flex items-center justify-center rounded-full shadow-md">
            <ChevronUp className="text-white md:w-[40px] w-[25px]" />
          </div>
        </button>
      )}
    </div>
  );
};

export default Layout;
