"use client";

import React from "react";
import { Testimonial } from "../../interfaces/testimonials.interface";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Props {
  testimonial: Testimonial;
}

function extractVideoId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|v=)([^?&]+)/);
  return match ? match[1] : "";
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const videoId = extractVideoId(testimonial.youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[320px] flex-shrink-0 border border-gray-200">
      {/* Embedded YouTube iframe with full controls */}
      <div className="relative aspect-video">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={testimonial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video Title & YouTube Link */}
      <div className="p-4">
        <p className="text-sm font-medium line-clamp-2">{testimonial.title}</p>

        <a
          href={testimonial.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center text-xs text-gray-600 hover:text-blue-600 hover:underline gap-1"
        >
          <Image
            src="https://d1b9peg0jj5bry.cloudfront.net/icons/youtube.png"
            alt="YouTube"
            width={16}
            height={16}
            className="w-4 h-4"
          />
            Watch on YouTube
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
