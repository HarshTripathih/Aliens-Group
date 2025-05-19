'use client';

import { AboutUsContent } from '@/app/interfaces/AboutUs.interface';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { CustomButton } from '../Button';
import { leftLineVariant, revealLeftVariant, revealRightVariant, rightLineVariant } from '@/app/utils/animations';

interface Props {
  content: AboutUsContent;
}

export default function AboutUs({ content }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: '-5% 0px -5% 0px',
  });

  const textControls = useAnimation();
  const revealControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start('visible');
      revealControls.start('reveal');
    } else {
      textControls.start('hidden');
      revealControls.start('hide');
    }
  }, [isInView]);

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

  

  const revealVariant = {
    reveal: { width: '0%', transition: { duration: 2, ease: 'easeInOut' } },
    hide: { width: '100%' },
  };

  

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Title */}
      <motion.h2
        className="text-center text-[#B57F12] text-3xl tracking-wider font-cormorant font-semibold uppercase mb-4"
        variants={fadeUpVariant}
        initial="hidden"
        animate={textControls}
        custom={0}
      >
        ABOUT US
      </motion.h2>

    {/* Animated lines */}
                  
                {/* Left golden line */}
                <motion.div
                  className="absolute top-[7rem] left-[25rem] h-[1px] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
                  variants={leftLineVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={0.6}
    
                />
    
                {/* Right golden line */}
                <motion.div
                  className="absolute top-[7rem] right-[25rem] h-[1px] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
                  variants={rightLineVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={0.6}
                />
    
                {/* Left white reveal overlay */}
                {/* Left white reveal overlay (shrinks leftward) */}
                <motion.div
                  className="absolute top-[7rem] left-[25rem] h-[1px] bg-white z-20 origin-right"
                  style={{ width: '21%' }}
                  variants={revealLeftVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={0.6}
                />
    
                {/* Right white reveal overlay (shrinks rightward) */}
                <motion.div
                  className="absolute top-[7rem] right-[25rem] h-[1px] bg-white z-20 origin-left"
                  style={{ width: '21%' }}
                  variants={revealRightVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={0.6}
                />    
    
      
      {/* Content */}
      <div
        ref={containerRef}
        className="container mx-auto flex flex-col md:flex-row items-center gap-12 mt-8 md:px-40"
      >
        {/* Left - Image Reveal */}
        <div className="w-full md:w-3/2 relative overflow-hidden h-96">
          <Image
            src={content.imageUrl}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className=""
            priority
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-full bg-white z-10"
            variants={revealVariant}
            initial="hide"
            animate={revealControls}
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-2/3">
          <motion.h3
            className="font-cormorant text-3xl text-[#000000]/70 font-bold mb-4"
            variants={fadeUpVariant}
            initial="hidden"
            animate={textControls}
            custom={0.3}
          >
            {content.heading}
          </motion.h3>

          <motion.p
            className="font-lato text-[#000000]/50 mb-6"
            variants={fadeUpVariant}
            initial="hidden"
            animate={textControls}
            custom={0.6}
          >
            {content.description}
          </motion.p>

         <CustomButton 
          text={content.buttonText}
          variants={fadeUpVariant}
          initial="hidden"
          animate={textControls}
          custom={0.9}
          whileHover="hover"
          className='text-black border border-black'
          />
        </div>
      </div>
    </section>
  );
}
