'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Award } from '../interfaces/award.interface';
import { getAwards } from '../lib/awards/awards.api';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { CustomButton } from '../components/Button';
import { leftLineVariant, revealLeftVariant, revealRightVariant, rightLineVariant } from '../utils/animations';

export default function AwardsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '20% 0px 20% 0px' });


  const [cardsPerView, setCardsPerView] = useState(1);
  const [scrollStep, setScrollStep] = useState(1);
  const textControls = useAnimation();
  const cardControls = useAnimation();

  const [awards, setAwards] = useState<Award[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);



  // Detect mobile/desktop to show 1 or 2 cards

    useEffect(() => {
      const updateView = () => {
        if (window.innerWidth >= 1024) {
          setCardsPerView(2);
          setScrollStep(2);
        } else {
          setCardsPerView(1);
          setScrollStep(1);
        }
      };

      updateView(); // on mount
      window.addEventListener('resize', updateView);
      return () => window.removeEventListener('resize', updateView);
    }, []);


   const visibleAwards = awards.slice(currentIndex, currentIndex + cardsPerView);




    const handleNext = () => {
      if (currentIndex + cardsPerView < awards.length) {
        setCurrentIndex((prev) => prev + scrollStep);
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => Math.max(prev - scrollStep, 0));
      }
    };



  useEffect(() => {
    getAwards().then(setAwards);
  }, []);

  useEffect(() => {
    if (isInView) {
      textControls.start('visible');
      cardControls.start('visible');
    } else {
      textControls.start('hidden');
      cardControls.start('hidden');
    }
  }, [isInView]);

  const fadeUpVariantButton = {
    hidden: { opacity: 1, y: 110,
      transition: {
        duration: 4,
        ease: 'easeOut',
      },
     },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: 'easeOut' },
    }),
  };


  const fadeUpVariantHeading = {
    hidden: { opacity: 1, y: 110,
      transition: {
        duration: 4,
        ease: 'easeOut',
      },
     },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    }),
  };



  const containerVariant = {
    visible: {
      transition: { staggerChildren: 0.5 },
    },
    hidden: {},
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <Head>
        <title>Awards and Certifications | Premium Living</title>
        <meta name="description" content="Explore our accolades in real estate and sustainability." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="relative py-[80px] overflow-hidden bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://d1b9peg0jj5bry.cloudfront.net/images/awardbg.svg"
            alt="Awards Background"
            fill
            className="object-cover object-center"
            priority // or loading="lazy" if not above the fold
          />
        </div>
        <motion.h2
          className="text-center text-[#B57F12] text-3xl tracking-wider font-cormorant font-semibold uppercase mb-4"
          variants={fadeUpVariantHeading}
          initial="hidden"
          animate={textControls}
          custom={0}
        >
          AWARDS AND CERTIFICATIONS
        </motion.h2>

        {/* Animated lines */}
              
            {/* Left golden line */}
            <motion.div
              className="absolute top-[6rem] left-[15rem] 2xl:left-[16rem]  h-[1px] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
              variants={leftLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}

            />

            {/* Right golden line */}
            <motion.div
              className="absolute top-[6rem] right-[15rem] 2xl:right-[16rem] h-[1px] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
              variants={rightLineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />

            {/* Left white reveal overlay */}
            {/* Left white reveal overlay (shrinks leftward) */}
            <motion.div
              className="absolute top-[6rem] left-[15rem] 2xl:left-[16rem] h-[1px] bg-white z-20 origin-right"
              style={{ width: '21%' }}
              variants={revealLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />

            {/* Right white reveal overlay (shrinks rightward) */}
            <motion.div
              className="absolute top-[6rem] right-[15rem] 2xl:right-[16rem] h-[1px] bg-white z-20 origin-left"
              style={{ width: '21%' }}
              variants={revealRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />


<div className="relative flex justify-center items-center mt-[40px] mb-[40px]">
  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    disabled={currentIndex === 0}
    className="absolute left-2 sm:left-8 z-10 p-2 bg-white rounded-full shadow-md disabled:opacity-40"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600" />
  </button>

  {/* Cards */}
  <motion.div
    ref={containerRef}
    className="flex gap-4 sm:gap-6 overflow-hidden px-4 w-full justify-center"
  >
    <AnimatePresence initial={false} mode="wait">
      {visibleAwards.map((award) => (
        <motion.div
          key={award.id}
          className="bg-red-200 rounded-3xl overflow-hidden shadow-md w-[280px] xsm:w-[300px] sm:w-[360px] md:w-[420px] flex-shrink-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -60, transition: { duration: 0.4, ease: 'easeIn' } }}
        >
          <div className="relative w-full h-[220px] xsm:h-[260px] sm:h-[320px] bg-white">
            <Image
              src={award.image}
              alt={award.description}
              fill
              className="object-contain"
            />
          </div>
          <div className="h-[30%] bg-gradient-to-t from-[#42454A] to-[#4A4D54] text-white text-center py-4 px-4 font-semibold text-sm sm:text-base uppercase tracking-wide">
            {award.title}
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    disabled={currentIndex + cardsPerView >= awards.length}
    className="absolute right-2 sm:right-8 z-10 p-2 bg-white rounded-full shadow-md disabled:opacity-40"
  >
    <ChevronRight className="w-6 h-6 text-gray-600" />
  </button>
</div>



        <div className="flex justify-center mt-12">
          <CustomButton 
            text='Learn More'
            variants={fadeUpVariantButton}
            initial="hidden"
            animate={textControls}
            custom={0.2}
            whileHover="hover"
            className='text-black text-[12px] border border-black sm:px-4 sm:py-2' 
            />
        </div>
      </section>
    </>
  );
}
