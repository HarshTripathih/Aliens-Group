import { Award } from "@/app/interfaces/award.interface";

export async function getAwards(): Promise<Award[]> {
  // Mocked API call, replace with your real backend call
  return [
    {
      id: 1,
      title: 'PLATINUM PRE-CERTIFICATION BY INDIAN GREEN BUILDING COUNCIL',
      image: 'https://d1b9peg0jj5bry.cloudfront.net/images/award1.svg',
      description: 'Indian Green Building Council Certificate Indian Green Building Council Certificate',
    },
    {
      id: 2,
      title: 'BEST RESIDENTIAL DEVELOPMENT – FUTURE',
      image: 'https://d1b9peg0jj5bry.cloudfront.net/images/award2.svg',
      description: 'Cityscape Real Estate Asia 2009',
    },
    {
      id: 3,
      title: 'WINNER OF TWO PRESTIGIOUS INTERNATIONAL PROPERTY AWARDS-2012-13',
      image: 'https://d1b9peg0jj5bry.cloudfront.net/images/award3.svg',
      description: 'harsh',
    },
    {
      id: 4,
      title: 'WINNER OF INTERNATIONAL QUALITY CROWN (QC) AWARD',
      image: 'https://d1b9peg0jj5bry.cloudfront.net/images/award4.svg',
      description: 'bhai',
    },
  ];
}
