'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import { ProjectCard as ProjectCardType } from '@/app/interfaces/project.interface';
import { getProjects } from '../lib/projectspage/project.api';
import { revealLeftVariant, revealRightVariant, leftLineVariant, rightLineVariant } from '../utils/animations'
import Image from 'next/image';

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '20% 0px 20% 0px' });
  const textControls = useAnimation();
  const cardControls = useAnimation(); // separate animation control for cards
  const [projects, setProjects] = useState<ProjectCardType[]>([]);

  useEffect(() => {
    getProjects().then((data) => {
      console.log('Projects:', data);
      setProjects(data);
    });
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



  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
    hidden: {},
  };

  const cardVariant = {
  hidden: { opacity: 1, y: 80 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom, ease: 'easeOut' },
  }),
};


  return (
    <>
      <Head>
        <title>Our Projects | Premium Living</title>
        <meta
          name="description"
          content="Explore our range of residential and plotted development projects tailored for luxury living."
        />
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
          variants={fadeUpVariant}
          initial="hidden"
          animate={textControls}
          custom={0}
        >
          OUR PROJECTS
        </motion.h2>

        {/* Animated lines */}
              
            {/* Left golden line */}
            <motion.div
              className="absolute top-[6rem] left-[23rem] 2xl:left-[24rem] h-[1px] bg-gradient-to-r from-[#80808040] to-[#B57F12CC] origin-left z-10"
              variants={leftLineVariant}
              initial="hidden"
              animate={textControls}
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}

            />

            {/* Right golden line */}
            <motion.div
              className="absolute top-[6rem] right-[23rem] 2xl:right-[24rem] h-[1px] bg-gradient-to-r from-[#B57F12CC] to-[#80808040] origin-right z-10"
              variants={rightLineVariant}
              initial="hidden"
              animate={textControls}
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />

            {/* Left white reveal overlay */}
            {/* Left white reveal overlay (shrinks leftward) */}
            <motion.div
              className="absolute top-[6rem] left-[23rem] 2xl:left-[24rem] h-[1px] bg-white z-20 origin-right"
              style={{ width: '21%' }}
              variants={revealLeftVariant}
              initial="hidden"
              animate={textControls}
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />

            {/* Right white reveal overlay (shrinks rightward) */}
            <motion.div
              className="absolute top-[6rem] right-[23rem 2xl:right-[24rem] h-[1px] bg-white z-20 origin-left"
              style={{ width: '21%' }}
              variants={revealRightVariant}
              initial="hidden"
              animate={textControls}
              viewport={{ once: false, amount: 0.2 }}
              custom={0.6}
            />    

        <motion.div
          ref={containerRef}
          className="container mx-auto mt-[40px] mb-[40px] flex flex-col md:flex-row gap-8 justify-center px-4 flex-wrap"
          variants={containerVariant} 
          initial="hidden"
          animate={cardControls} // important
        >
          {projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects to display.</p>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                custom={(index + 1) * 0.2}
                className="w-full md:w-[40%]"
              >
                <ProjectCard
                  project={project}
                  custom={(index + 1) * 0.2}
                  animate={cardControls}
                />
              </motion.div>
            ))

          )}
        </motion.div>
      </section>
    </>
  );
}
