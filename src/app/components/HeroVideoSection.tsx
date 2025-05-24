'use client';

import React from 'react';

const HeroVideoSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://d1b9peg0jj5bry.cloudfront.net/videos/HeroSection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[8rem] 2xl:text-[8rem] font-corinthia">
          Futuristic<span className="mx-2 text-2xl">•</span>Serene<span className="mx-2 text-2xl">•</span>Yours
        </h1>

      </div>
    </div>
  );
};

export default HeroVideoSection;








// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import react-player to avoid SSR issues
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

// const HeroVideoSection = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Fullscreen Video Player */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <ReactPlayer
//           url="https://d1b9peg0jj5bry.cloudfront.net/videos/HeroSection.mp4"
//           playing
//           loop
//           muted
//           playsinline
//           width="100%"
//           height="100%"
//           style={{ objectFit: 'cover' }}
//           config={{
//             file: {
//               attributes: {
//                 autoPlay: true,
//                 muted: true,
//                 loop: true,
//                 playsInline: true,
//                 preload: 'auto',
//               },
//             },
//           }}
//         />
//       </div>

//       {/* Overlay Text */}
//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <h1 className="text-white text-4xl md:text-6xl font-cursive text-center">
//           Futuristic. Serene. Yours
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default HeroVideoSection;
