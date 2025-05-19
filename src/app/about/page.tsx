import { Metadata } from 'next';
import AboutUsWrapper from '../components/AboutUsSection/AboutUsWrapper';
import { AboutUsContent } from '../interfaces/AboutUs.interface';

export const metadata: Metadata = {
  title: 'About Us | YourSiteName',
  description: 'Redefining Intelligent Luxury...',
};

const aboutContent: AboutUsContent = {
  heading: 'Redefining Intelligent Luxury',
  subheading: 'Innovation Meets Elegance',
  description: 'At Aliens Group, we are redefining luxury living for the modern world. Headquartered in Gachibowli, Hyderabad, Aliens Group - comprising Aliens Developers and Aliens Smart City is the brainchild of visionary brothers Hari Challa and Venkat Challa.',
  buttonText: 'Explore Addon',
  imageUrl: '/images/aboutus.jpg',
};

export default function AboutPage() {
  return (
    <main>
      <AboutUsWrapper content={aboutContent} />
    </main>
  );
}
