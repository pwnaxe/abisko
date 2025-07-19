import React, { useState, useEffect } from 'react';
import Script from 'next/script';

interface AttractionCardProps {
  title: string;
  rating: number;
  location: string;
  duration: string;
  price: string;
  image: string;
  starIcon?: string;
  isLarge?: boolean;
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
  image,
  starIcon = "/img/Star1.png",
  isLarge = false,
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
    <div className={`shadow-xl rounded-3xl overflow-hidden flex flex-col ${isLarge ? 'h-[58rem]' : 'h-[28rem]'}`}>
      <div className='relative flex-shrink-0'>
        <img 
          src={image} 
          alt={title} 
          className={`w-full object-cover ${isLarge ? 'h-[46rem]' : 'h-64'}`} 
        />
        <p className='absolute top-4 left-4 rounded-full text-white px-4 py-2 bg-[#00284D]'>
          Nowość
        </p>
        <p className='absolute top-4 right-4 rounded-full text-white px-4 py-2 bg-[#00284D]/40 flex gap-1 items-center'>
          <img src={starIcon} alt="star" className="w-4 h-4" /> {rating}
        </p>
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-xl font-bold mb-3 overflow-hidden min-h-[3.5rem] leading-tight' style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>{title}</h3>

        <div className='flex gap-4 mb-4 text-sm text-gray-600'>
          <p className='flex gap-1 items-center'>
            <img src="/img/loc_icon2.png" alt="location" className="w-4 h-4" />
            {location}
          </p>
          <p className='flex gap-1 items-center'>
            <img src="/img/time_icon2.png" alt="time" className="w-4 h-4" />
            {duration}
          </p>
        </div>

        {showBooking && (
          <div id={widgetId} className='mb-4 p-4 bg-gray-100 border rounded-lg'>
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

        <div className='flex justify-between items-center mt-auto'>
          <p className='text-2xl font-extrabold text-[#00B7A3]'>{price}</p>
          <button
            className='px-4 py-2 bg-[#00B7A3] text-white font-bold rounded-full text-sm'
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