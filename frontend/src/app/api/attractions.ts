// /pages/api/attractions.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const attractions = [
    {
      id: 1,
      title: 'Fjord Tour',
      rating: 4.7,
      location: 'Laponia',
      duration: '3 godziny',
      price: '350',
      itemId: '6',
      categoryId: '2',
      host: 'jaroabisko.checkfront.com',
    },
    {
      id: 2,
      title: 'Snowmobile Daytime Driving',
      rating: 4.9,
      location: 'Laponia',
      duration: '5 godzin',
      price: '500',
      itemId: '31',
      categoryId: '2',
      host: 'jaroabisko.checkfront.com',
    },
    {
      id: 3,
      title: 'Aurora Snowmobile Tour',
      rating: 4.8,
      location: 'Laponia',
      duration: '4 godziny',
      price: '450',
      itemId: '38',
      categoryId: '3',
      host: 'jaroabisko.checkfront.com',
    },
    // Dodaj więcej atrakcji w podobnym formacie...
  ];

  res.status(200).json(attractions);
}
