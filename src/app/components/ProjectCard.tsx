// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { ProjectCard as ProjectCardType } from '../interfaces/project.interface';

// interface Props {
//   project: ProjectCardType;
// }

// export default function ProjectCard({ project }: Props) {
//   return (
//     <Link
//       href={project.link}
//       className="relative group overflow-hidden w-full md:w-[40%] cursor-pointer"
//     >
//       <div className="relative h-[500px] overflow-hidden rounded">
//         <Image
//           src={project.imageUrl}
//           alt={project.altText}
//           loading='lazy'
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
          
//         />
//       </div>
//       <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
//         {project.title}
//       </div>
//       <div className="absolute bottom-6 right-6 text-white text-sm tracking-wide flex items-center gap-1">
//         EXPLORE <span>→</span>
//       </div>
//     </Link>
//   );
// }





'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimationControls } from 'framer-motion';
import { ProjectCard as ProjectCardType } from '../interfaces/project.interface';

interface Props {
  project: ProjectCardType;
  custom?: number;
  animate?: AnimationControls;
}

export default function ProjectCard({ project, custom = 0, animate }: Props) {
  return (
    <Link
      href={project.link}
      className="relative group overflow-hidden w-full md:w-[40%] cursor-pointer"
    >
      <div className="relative h-[500px] overflow-hidden rounded">
        <motion.div
          variants={{
            hidden: { y: 80 },
            visible: { y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          initial="hidden"
          animate={animate}
          custom={custom}
          className="w-full h-full"
        >
          <Image
            src={project.imageUrl}
            alt={project.altText}
            priority
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white">
  <motion.div className="text-2xl font-semibold">
    {project.title}
  </motion.div>
  <div className="text-sm tracking-wide flex items-center gap-1 mt-2 sm:mt-0">
    EXPLORE <span>→</span>
  </div>
</div>

    </Link>
  );
}
