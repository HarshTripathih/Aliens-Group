import { CarouselItem } from "@/app/interfaces/featured.interface";

export async function getFeaturedCategories(): Promise<CarouselItem[]> {
  return [
    {
      title: 'SkyVilla',
      location: 'Tellapur-Gachibowli, Hyderabad',
      area: '6703 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/skyvilla.png',
      buttonText: 'Know more',
    },
    {
      title: 'Duplex',
      location: 'Tellapur-Gachibowli, Hyderabad',
      area: '3751-4112 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/duplex.png',
      buttonText: 'Know more',
    },
    {
      title: 'Signature Plots',
      location: 'Srisailam Highway, Hyderabad',
      area: '500-2000 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/signatureplot.png',
      buttonText: 'Know more',
    },
    {
      title: 'Palace Plots',
      location: 'Srisailam Highway, Hyderabad',
      area: '500-2000 sq.yd.',
      imageUrl: 'https://d1b9peg0jj5bry.cloudfront.net/images/palaceplot.png',
      buttonText: 'Know more',
    },
  ];
}
