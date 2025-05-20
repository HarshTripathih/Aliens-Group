import { CarouselItem } from "@/app/interfaces/featured.interface";

export async function getFeaturedCategories(): Promise<CarouselItem[]> {
  return [
    {
      title: 'SkyVilla',
      location: 'Tellapur-Gachibowli, Hyderabad',
      area: '6703 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/featured1.jpg',
      buttonText: 'Know more',
    },
    {
      title: 'Palm Heights',
      location: 'Kondapur, Hyderabad',
      area: '5200 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/featured2.jpg',
      buttonText: 'Know more',
    },
    {
      title: 'LakeView Estate',
      location: 'Miyapur, Hyderabad',
      area: '4800 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/featured3.png',
      buttonText: 'Know more',
    },
    {
      title: 'Green Meadows',
      location: 'Shamirpet, Hyderabad',
      area: '7300 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/featured4.png',
      buttonText: 'Know more',
    },
  ];
}
