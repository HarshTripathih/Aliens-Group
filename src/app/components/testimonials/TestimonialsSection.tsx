"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { testimonialsData } from "@/app/lib/testimonials/testimonials.api";
import { useRouter } from "next/navigation";
import TestimonialCard from "./TestimonialCard";
import { CustomButton } from "../Button";
import { leftLineVariant, revealLeftVariant, revealRightVariant, rightLineVariant } from "@/app/utils/animations";

const TestimonialsSection = () => {
  const router = useRouter();
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: "-10% 0px -10% 0px" });
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [isInView]);

  const fadeUpVariant = {
    hidden: { opacity: 1, y: 40,
      transition: {
        duration: 4,
        ease: 'easeOut',
      },
     },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: "easeOut" },
    }),
  };


  return (
    <section className="py-16 relative">
      <div className="text-center mb-10 relative" ref={headingRef}>
        <motion.h2
          className="text-3xl font-semibold text-[#B57F12] tracking-wide relative z-10"
          variants={fadeUpVariant}
          initial="hidden"
          animate={textControls}
          custom={0}
        >
          <span className="pb-2 text-[#B57F12] font-cormorant text-3xl tracking-wider font-semibold uppercase mb-4">TESTIMONIALS</span>
        </motion.h2>

        {/* Animated lines */}
                      
                    {/* Left golden line */}
                    <motion.div
                      className="absolute top-[1rem] left-[23rem] h-[1px] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
                      variants={leftLineVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      custom={0.6}
        
                    />
        
                    {/* Right golden line */}
                    <motion.div
                      className="absolute top-[1rem] right-[23rem] h-[1px] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
                      variants={rightLineVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      custom={0.6}
                    />
        
                    {/* Left white reveal overlay */}
                    {/* Left white reveal overlay (shrinks leftward) */}
                    <motion.div
                      className="absolute top-[1rem] left-[23rem] h-[1px] bg-white z-20 origin-right"
                      style={{ width: '21%' }}
                      variants={revealLeftVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      custom={0.6}
                    />
        
                    {/* Right white reveal overlay (shrinks rightward) */}
                    <motion.div
                      className="absolute top-[1rem] right-[23rem] h-[1px] bg-white z-20 origin-left"
                      style={{ width: '21%' }}
                      variants={revealRightVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.2 }}
                      custom={0.6}
                    />
        
        </div>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 px-4 md:px-10">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="text-center flex justify-center mt-10">
        <CustomButton
          text="View All"
          variants={fadeUpVariant}
          initial="hidden"
          animate={textControls}
          custom={0.4}
          whileHover="hover"
          className="text-black border border-black sm:px-4 sm:py-2"
          onClick={() => router.push("/testimonials")}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
