"use client"; // Marks this file as a Client Component

import Footer from "@/components/app/Footer";
import Header from "@/components/app/Header";
import { FaArrowUp } from "react-icons/fa";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow">{children}</main>
      <div id="footer">
        <Footer />
      </div>

      {/* Scroll-to-top button */} 
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-brown text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Layout;
