import React, { useState, useEffect } from 'react';
import Script from 'next/script';

interface AttractionCardProps {
  title: string;
  rating: number;
  location: string;
  duration: string;
  price: string;
  widgetId: string;
  itemId: string;
  categoryId: string;
  host: string;
  tid?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  title,
  rating,
  location,
  duration,
  price,
  widgetId,
  itemId,
  categoryId,
  host,
  tid = 'Lukaz',
}) => {
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (showBooking && typeof window !== 'undefined') {
      // Inicjalizacja widżetu Checkfront po stronie klienta
      new DROPLET.Widget({
        host: host,
        target: widgetId,
        item_id: itemId,
        category_id: categoryId,
        tid: tid,
        options: 'category_select,hidesearch',
        provider: 'droplet',
      }).render();
    }
  }, [showBooking, widgetId, itemId, categoryId, host, tid]);

  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative'>
        <img src={`/images/${itemId}.jpg`} alt={title} className='w-full h-64 object-cover' />
        <p className='absolute top-4 left-4 rounded-full text-white px-4 py-2 bg-[#00284D]'>
          Nowość
        </p>
        <p className='absolute top-4 right-4 rounded-full text-white px-4 py-2 bg-[#00284D]/40 flex gap-1 items-center'>
          ★ {rating}
        </p>
      </div>
      <div className='p-4'>
        <p className='text-2xl font-bold'>{title}</p>

        <div className='flex gap-8 my-4'>
          <p className='flex gap-2 items-center'>📍 {location}</p>
          <p className='flex gap-2 items-center'>⏰ {duration}</p>
        </div>

        {showBooking && (
          <div id={widgetId} className='my-4 p-4 bg-gray-100 border rounded-lg'>
            <p
              id="CHECKFRONT_LOADER"
              style={{
                background: `url('//${host}/images/loader.gif') left center no-repeat`,
                padding: '5px 5px 5px 20px',
              }}
            >
              Wyszukiwanie dostępności...
            </p>
          </div>
        )}

        <div className='flex justify-between items-center my-4'>
          <p className='text-3xl font-extrabold text-[#00B7A3]'>{price} zł</p>
          <button
            className='px-6 py-2 bg-[#00B7A3] text-white font-bold rounded-full'
            onClick={() => setShowBooking(!showBooking)}
          >
            {showBooking ? 'Zwiń' : 'Kup teraz'}
          </button>
        </div>
      </div>
      <Script src={`//${host}/lib/interface--0.js`} strategy="lazyOnload" />
    </div>
  );
};

export default AttractionCard;