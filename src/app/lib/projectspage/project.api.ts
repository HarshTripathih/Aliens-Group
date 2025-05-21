import { ProjectCard } from "@/app/interfaces/project.interface";

export async function getProjects(): Promise<ProjectCard[]> {
  return [
    {
      id: '1',
      title: 'Residential',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/ssproject.png',
      altText: 'Residential project',
      link: '/projects/residential',
      slug: 'residential',
      description: 'Luxurious residential project with modern amenities.'
    },
    {
      id: '2',
      title: 'Plotted development',
      imageUrl: '/images/hubproject.jpg',
      altText: 'Plotted development project',
      link: '/projects/plotted',
      slug: 'plotted',
      description: 'Premium plotted development with scenic surroundings.'
    },
    // Add more as needed
  ];
}