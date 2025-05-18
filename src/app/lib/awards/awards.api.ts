import { Award } from "@/app/interfaces/award.interface";

export async function getAwards(): Promise<Award[]> {
  // Mocked API call, replace with your real backend call
  return [
    {
      id: 1,
      title: 'PLATINUM PRE-CERTIFICATION BY INDIAN GREEN BUILDING COUNCIL',
      image: '/images/award1.svg',
      description: 'Indian Green Building Council Certificate Indian Green Building Council Certificate',
    },
    {
      id: 2,
      title: 'BEST RESIDENTIAL DEVELOPMENT – FUTURE',
      image: '/images/award2.svg',
      description: 'Cityscape Real Estate Asia 2009',
    },
    {
      id: 3,
      title: 'PLATINUM PRE-CERTIFICATION BY INDIAN GREEN BUILDING COUNCIL PLATINUM PRE-CERTIFICATION BY INDIAN GREEN BUILDING COUNCIL',
      image: '/images/award3.svg',
      description: 'harsh',
    },
    {
      id: 4,
      title: 'BEST RESIDENTIAL DEVELOPMENT – FUTURE',
      image: '/images/award4.svg',
      description: 'bhai',
    },
  ];
}
