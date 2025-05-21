import { CarouselItem } from "@/app/interfaces/featured.interface";

export async function getFeaturedCategories(): Promise<CarouselItem[]> {
  return [
    {
      title: 'SkyVilla',
      location: 'Tellapur-Gachibowli, Hyderabad',
      area: '6703 sq.yd.',
      imageUrl: '/images/featured1.jpg',
      buttonText: 'Know more',
    },
    {
      title: 'Duplex',
      location: 'Tellapur-Gachibowli, Hyderabad',
      area: '3751-4112 sq.yd.',
      imageUrl: '/images/featured2.jpg',
      buttonText: 'Know more',
    },
    {
      title: 'Signature Plots',
      location: 'Srisailam Highway, Hyderabad',
      area: '500-2000 sq.yd.',
      imageUrl: '/images/featured3.jpg',
      buttonText: 'Know more',
    },
    {
      title: 'Palace Plots',
      location: 'Srisailam Highway, Hyderabad',
      area: '500-2000 sq.yd.',
      imageUrl: '/images/featured4.jpg',
      buttonText: 'Know more',
    },
  ];
}
