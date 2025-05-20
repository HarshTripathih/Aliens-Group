'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../interfaces/navbar.interface';
import PdfModal from './NewsPdfModal';
import Image from 'next/image';

const navItems: NavItem[] = [
  { label: 'About Us', href: '/maintenance' },
  { label: 'Our Projects', href: '/maintenance' },
  { label: 'Investors', href: '/maintenance' },
  { label: 'Contact us', href: '/maintenance' },
];

const primaryItems: NavItem[] = [
  { label: 'OUR STORY', href: '/maintenance' },
  { label: 'OUR VALUES', href: '/maintenance' },
  { label: 'NEWS LETTER', href: '' },
  { label: 'LEADERSHIP', href: '/maintenance' },
  { label: 'BLOG & NEWS', href: '/maintenance' },
  { label: 'CAREERS', href: '/maintenance' },
  { label: 'GALLERY', href: '/maintenance' },
];

// const Items: NavItem[] = [...primaryItems, ...primaryItems];


const secondaryItems: NavItem[] = [
  { label: 'SCHEDULE A SITE VISIT', href: '/maintenance' },
  { label: 'ENQUIRE', href: '/maintenance' },
  { label: 'REACH US', href: '/maintenance' },
];

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
    setIsTop(currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Navbar */}
      <AnimatePresence>
        {showNavbar && (
          <motion.header
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`fixed top-0 w-full z-50 ${
              isTop
                ? 'bg-[#000000a6] backdrop-blur-[40px] text-white'
                : 'bg-white shadow-md text-gray-900'
            }`}
          >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="https://d1b9peg0jj5bry.cloudfront.net/logos/aliensnav.svg"
                  alt="Aliens Logo"
                  width={202}
                  height={55}
                  priority // ensures it's preloaded since it's likely in the navbar
                  className="h-[55.05px] w-[202.26px]"
                />
              </div>


              {/* Desktop Nav */}
              <nav className="md:w-3/4 hidden md:flex items-center justify-end space-x-8">
                {navItems.map((item) => (
                  <Link
                  key={item.label}
                  href={item.href}
                  className={`relative  transition font-medium
                    ${isTop ? 'text-white nav-underline' : 'text-gray-900 nav-underline2'}
                  `}
                >
                  {item.label}
                </Link>
                ))}
              </nav>

              {/* Toggle Button */}
              <button onClick={() => setIsMenuOpen(true)} className="text-white bg-white/30 backdrop-blur-[42px] px-2 py-[0.3rem]">
                <Menu className={`${isTop ? 'text-white' : 'text-gray-900'} w-7 h-7`} />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black text-white"
          >
            <div className="flex flex-col md:flex-row justify-between items-start p-6 md:p-12 gap-10 h-full">
              {/* Left Nav Items */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex justify-between h-full flex-col space-y-6 text-3xl font-light"
              >
                <div className='flex flex-col font-inter gap-4'>
                  {primaryItems.map((item) =>
                    item.label === 'NEWS LETTER' ? (
                      <button
                        key={item.label}
                        onClick={() => setIsPdfModalOpen(true)}
                        className="text-left"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
                <div className="mt-12 space-y-2 text-sm font-light">
                  {secondaryItems.map((item) => (
                    <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="block">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Right: Video Reveal */}
              <motion.div
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: ['60px', '30px', '380px'] }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  times: [0, 0.4, 0.9], // first 30px slowly, rest quickly
                  delay: 0.2,
                }}
                className="w-full md:mt-[5rem] md:w-[700px] self-center md:self-start overflow-hidden"
              >
               {/* <video
                autoPlay
                muted
                loop
                playsInline
                src="/videos/discovery.mp4"
                className="w-full h-full object-cover"
                /> */}
                <img
                  src="/images/navimage.jpg"
                  alt="Navigation image"
                  
                  className="w-full h-full object-cover"
                   // preload if it's above the fold
                />
              </motion.div>


              {/* Close Button */}
              <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Footer Text Animation */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-8 left-[45rem] text-[6rem] font-light"
            >
              <span className="font-serif mr-2">Next-Gen</span>
              <em className="italic font-serif">Homes</em>
            </motion.div>
          </motion.div>
        )}
        <PdfModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
          pdfPath="https://aliensgroupmedia.s3.ap-south-1.amazonaws.com/newsletter.pdf"
          title="Aliens Newsletter"
        />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
