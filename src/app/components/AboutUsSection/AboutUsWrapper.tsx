'use client';

import dynamic from 'next/dynamic';
import { AboutUsContent } from '../../interfaces/AboutUs.interface';

const AboutUsSection = dynamic(() => import('./AboutUs'), { ssr: false });

export default function AboutUsWrapper({ content }: { content: AboutUsContent }) {
  return <AboutUsSection content={content} />;
}
