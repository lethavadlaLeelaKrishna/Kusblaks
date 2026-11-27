import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BubbleCursor from '../components/BubbleCursor';

const PageLoader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f3e9]/85 backdrop-blur-sm">
    <div className="flex flex-col items-center gap-4">
      <span className="relative flex items-center justify-center w-16 h-16">
        <span className="absolute inset-0 rounded-full border border-[#c6a15b]/40"></span>
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#c6a15b] animate-spin"></span>
        <span className="text-lg font-bold text-[#000000] font-display">K</span>
      </span>
      <span className="text-xs font-semibold text-[#a9853f] tracking-[0.35em] uppercase">Loading</span>
    </div>
  </div>
);

const MainLayout = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    var timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f3e9]">
      <BubbleCursor />
      {loading && <PageLoader />}
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      <a
        href="https://wa.me/919010529521"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-12 rounded-lg bg-[#000000] border border-[#c6a15b]/60 shadow-[0_16px_36px_-14px_rgba(0,0,0,0.65)] hover:bg-[#c6a15b] hover:scale-105 transition-all duration-300"
      >
        <i className="fab fa-whatsapp text-2xl text-[#c6a15b] group-hover:text-[#000000] transition-colors duration-300" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default MainLayout;
