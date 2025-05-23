'use client';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';



export default function AliensFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className="bg-[#f9f9f9] pt-16 pb-6 border-t border-gray-200 text-black"
    >
      {/* <div className="bg-[#F8F8F8] max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
       
        <div className="md:col-span-2 order-1">
            <h3 className="text-xl font-bold mb-4">ABOUT ALIENS GROUP</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
            <input
                type="email"
                placeholder="Enter your email"
                className="border border-black px-4 py-3 rounded-md w-full sm:w-auto flex-1 outline-none"
            />
            <button
                type="submit"
                className="border border-black px-6 py-3 rounded-md whitespace-nowrap"
            >
                Subscribe
            </button>
            </form>
        </div>

       
        <div className="order-2">
            <h4 className="font-semibold mb-3">Column One</h4>
            <ul className="space-y-2 text-sm">
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
            <li>Link Four</li>
            <li>Link Five</li>
            </ul>
        </div>


        <div className="order-3">
            <h4 className="font-semibold mb-3">Column Two</h4>
            <ul className="space-y-2 text-sm">
            <li>Link Six</li>
            <li>Link Seven</li>
            <li>Link Eight</li>
            <li>Link Nine</li>
            <li>Link Ten</li>
            </ul>
        </div>

       
        <div className="order-4">
            <h4 className="font-semibold mb-3">Aliens Space Station</h4>
            <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2"><FaXTwitter /> X</li>
            <li className="flex items-center gap-2"><FaLinkedinIn /> LinkedIn</li>
            <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
            </ul>
        </div>

        
        <div className="order-5">
            <h4 className="font-semibold mb-3">Aliens Hub</h4>
            <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2"><FaXTwitter /> X</li>
            <li className="flex items-center gap-2"><FaLinkedinIn /> LinkedIn</li>
            <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
            </ul>
        </div>
      </div> */}

      <div className="bg-gray-50 py-16 flex flex-col items-center text-center px-4">
      <div className="bg-[#B57F12] p-4 rounded-full mb-6">
        <PaperPlaneIcon className="w-6 h-6 text-white -rotate-[50deg]" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Stay Up to Date</h2>
      <p className="text-gray-600 mb-6">Subscribe to our newsletter to receive our weekly feed.</p>
      <form className="flex items-center w-full max-w-md">
        <input
          type="email"
          placeholder="Your e-mail"
          className="flex-grow px-4 py-3 rounded-l-full bg-white border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center px-5 py-3 rounded-r-full bg-white border border-l-0 border-gray-300 hover:bg-gray-100 transition"
        >
          <span className="mr-2">Send</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between px-4 text-sm text-gray-600">
        <div className="md:w-1/4 flex items-center md:justify-end gap-2">
          <Image
            src="https://d1b9peg0jj5bry.cloudfront.net/logos/aliensnav.svg"
            alt="Aliens Group Logo"
            width={202} // adjust as needed
            height={55} // adjust as needed
            className="h-12 w-auto"
          />
        </div>
        <div className="md:w-1/2 flex gap-4 mt-4 md:justify-center sm:mt-0">
          <span>Copyright © 2025 Aliens Group</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Site Layout</a>
        </div>
      </div>
    </motion.footer>
  );
}
