import { Metadata } from 'next';
import HeroVideoSection from './components/HeroVideoSection';
import { getHomePageSEO } from './lib/homepage/api';
import AboutPage from './about/page';
import ProjectsPage from './projects/page';
import FeaturedCategories from './components/carousel/FeaturedCategories';
import AwardsPage from './awards/page';
import TestimonialsSection from './components/testimonials/TestimonialsSection';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getHomePageSEO();
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      images: seoData.ogImages,
    }
  };
}

export default function HomePage() {
  return (
    <main>
      <HeroVideoSection />
      <AboutPage/>
      <ProjectsPage/>
      <FeaturedCategories/>
      <AwardsPage/>
      <TestimonialsSection/>
    </main>
  );
}
