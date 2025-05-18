'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from '@/app/interfaces/featured.interface';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getFeaturedCategories } from '@/app/lib/featuredCategorypage/featured.api';
import Image from 'next/image';
import { CustomButton } from '../Button';
import { leftLineVariant, revealLeftVariant, revealRightVariant, rightLineVariant } from '@/app/utils/animations';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};


  


export default function FeaturedCategories() {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getFeaturedCategories();
      setItems(data);
    }
    fetchData();
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Title */}
      <motion.h2
        className="text-center text-[#B57F12] font-cormorant text-3xl tracking-wider font-semibold uppercase mb-4"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        Featured Categories
      </motion.h2>

      {/* Animated lines */}
                    
                  {/* Left golden line */}
                  <motion.div
                    className="absolute top-[7rem] left-[19rem] h-[1px] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
                    variants={leftLineVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={0.6}
      
                  />
      
                  {/* Right golden line */}
                  <motion.div
                    className="absolute top-[7rem] right-[19rem] h-[1px] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
                    variants={rightLineVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={0.6}
                  />
      
                  {/* Left white reveal overlay */}
                  {/* Left white reveal overlay (shrinks leftward) */}
                  <motion.div
                    className="absolute top-[7rem] left-[19rem] h-[1px] bg-white z-20 origin-right"
                    style={{ width: '21%' }}
                    variants={revealLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={0.6}
                  />
      
                  {/* Right white reveal overlay (shrinks rightward) */}
                  <motion.div
                    className="absolute top-[7rem] right-[19rem] h-[1px] bg-white z-20 origin-left"
                    style={{ width: '21%' }}
                    variants={revealRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={0.6}
                  />

      {/* Carousel */}
      <div className="relative w-full h-[750px] mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-700"
            />
            <div className="absolute left-[4rem] bottom-20 bg-[#e2e2e2]/20 backdrop-blur-sm text-white p-6 w-[350px] rounded-lg">
              <h3 className="md:text-4xl font-cormorant font-bold">{item.title}</h3>
              <p className="md:text-xl mt-1">{item.location}</p>
              <p className="md:text-xl">Area : {item.area}</p>
            </div>
            <div className="absolute bottom-10 w-full flex justify-center">
                <CustomButton 
                    text='Learn More'
                    className='text-white border border-white'
                />
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white z-20 bg-black/50 p-2 rounded-full hover:bg-black"
          onClick={prevSlide}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white z-20 bg-black/50 p-2 rounded-full hover:bg-black"
          onClick={nextSlide}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6">
        {items.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`mx-1 cursor-pointer transition-all duration-300 w-3 h-1 rounded-full ${
              idx === currentIndex ? 'bg-black w-5' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
