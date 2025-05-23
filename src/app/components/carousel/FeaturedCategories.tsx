'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from '@/app/interfaces/featured.interface';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getFeaturedCategories } from '@/app/lib/featuredCategorypage/featured.api';
import Image from 'next/image';
import { CustomButton } from '../Button';
import { leftLineVariant, revealLeftVariant, revealRightVariant, rightLineVariant } from '@/app/utils/animations';

const fadeUpVariant = {
    hidden: {
      opacity: 1,
      y: 110,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: 'easeOut',
      },
    }),
  };



export default function FeaturedCategories() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: '10% 0px 10% 0px',
  });
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    if(isInView){
      console.log('Section is in view')
      
    }else{}
  },[isInView])

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
    <section ref={containerRef} className="relative overflow-hidden bg-white py-[80px] px-4 sm:px-0">
      {/* Title */}
      <motion.h2
        className="text-center text-[#B57F12] font-cormorant text-2xl sm:text-3xl tracking-wider font-semibold uppercase mb-4"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        Featured Categories
      </motion.h2>

      {/* Animated lines */}
      <motion.div
        className="absolute top-[5rem] sm:top-[6rem] left-[19rem] 2xl:left-[28.2rem] h-px w-[30%] sm:w-[21%] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
        variants={leftLineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.6}
      />
      <motion.div
        className="absolute top-[5rem] sm:top-[6rem] right-[19rem] 2xl:right-[28.2rem] h-px w-[30%] sm:w-[21%] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
        variants={rightLineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.6}
      />
      <motion.div
        className="absolute top-[5rem] sm:top-[6rem] left-[19rem] 2xl:left-[28.2rem] h-px bg-white z-20 origin-right"
        style={{ width: '30%' }}
        variants={revealLeftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.6}
      />
      <motion.div
        className="absolute top-[5rem] sm:top-[6rem] right-[19rem] 2xl:right-[28.2rem] h-px bg-white z-20 origin-left"
        style={{ width: '30%' }}
        variants={revealRightVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0.6}
      />

      {/* Carousel */}
      <div className="relative w-full aspect-[4/3] sm:h-[750px] mt-[40px] mb-[40px]">
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
              unoptimized
              className="transition-all duration-700"
            />

            <div className="absolute left-4 sm:left-[4rem] bottom-10 sm:bottom-20 bg-[#e2e2e2]/20 backdrop-blur-sm text-white p-2 sm:p-6 w-[200px] sm:w-[350px] max-w-[350px] rounded-lg">
              <h3 className="text-base sm:text-4xl font-cormorant font-bold">{item.title}</h3>
              <p className="text-xs sm:text-xl mt-1">{item.location}</p>
              <p className="text-xs sm:text-xl">Area : {item.area}</p>
            </div>

            <div className="absolute left-[7rem] sm:left-0 bottom-4 sm:bottom-10 w-full flex justify-center">
              <CustomButton 
                text='Learn More'
                className='2xl:text-[12px] text-white border border-white px-1 py-1 sm:px-4 sm:py-2'
              />
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-2 sm:left-6 transform -translate-y-1/2 text-white z-20 bg-black/50 p-1 sm:p-2 rounded-full hover:bg-black"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-6 transform -translate-y-1/2 text-white z-20 bg-black/50 p-1 sm:p-2 rounded-full hover:bg-black"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
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
