import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { MdOutlineTimer } from 'react-icons/md';
import Image from 'next/image';

function AttractionCard({ title, rating, location, duration, price, widgetId, checkfrontId }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [showBooking, setShowBooking] = useState(false); // Stan do pokazywania widgetu

  useEffect(() => {
    // Załaduj dane z Checkfront API, w tym obrazek
    async function fetchCheckfrontImage() {
      try {
        const response = await fetch(
          `https://explorearctic.checkfront.com/api/3.0/item/${checkfrontId}?photos=1`, // Przyklad API endpoint
          {
            headers: {
              'Authorization': 'Bearer YOUR_API_KEY', // Twój klucz API
            },
          }
        );
        const data = await response.json();
        
        // Sprawdź, czy są zdjęcia, i ustaw pierwsze zdjęcie jako źródło obrazu
        if (data.item && data.item.photos && data.item.photos.length > 0) {
          setImageSrc(data.item.photos[0].url); // Ustaw pierwsze zdjęcie
        }
      } catch (error) {
        console.error('Error fetching image from Checkfront:', error);
      }
    }

    fetchCheckfrontImage();

    if (typeof DROPLET !== 'undefined' && showBooking) {
      new DROPLET.Widget({
        host: 'explorearctic.checkfront.com',
        target: widgetId,
        item_id: checkfrontId, // Użyj checkfrontId, aby dynamicznie ładować widget
        category_id: '2',
        options: 'category_select,hidesearch',
        provider: 'droplet',
      }).render();
    }
  }, [widgetId, checkfrontId, showBooking]);

  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative'>
        {/* Dynamicznie ładowany obraz */}
        {imageSrc ? (
          <img src={imageSrc} alt={title} className='w-full h-64 object-cover' />
        ) : (
          <div className='w-full h-64 bg-gray-200 flex items-center justify-center'>
            <p>Ładowanie...</p>
          </div>
        )}
        <p className='absolute top-4 left-4 rounded-full text-white px-4 py-2 bg-[#00284D]'>
          Nowość
        </p>
        <p className='absolute top-4 right-4 rounded-full text-white px-4 py-2 bg-[#00284D]/40 flex gap-1 items-center'>
          <FaStar size={18} /> {rating}
        </p>
      </div>
      <div className='p-4'>
        <p className='text-2xl font-bold'>{title}</p>

        <div className='flex gap-8 my-4'>
          <p className='flex gap-2 items-center'>
            <LiaMapMarkerAltSolid /> {location}
          </p>
          <p className='flex gap-2 items-center'>
            <MdOutlineTimer /> {duration}
          </p>
        </div>

        {/* Widget Checkfront - ukryty na początku */}
        {showBooking && (
          <div id={widgetId} className='my-4'>
            <p
              id="CHECKFRONT_LOADER"
              style={{
                background: "url('//explorearctic.checkfront.com/images/loader.gif') left center no-repeat",
                padding: '5px 5px 5px 20px',
              }}
            >
              Searching Availability...
            </p>
          </div>
        )}

        <div className='flex justify-between items-center my-4'>
          <p className='text-3xl font-extrabold text-[#00B7A3]'>{price} zł</p>
          <button
            className='px-6 py-2 bg-[#00B7A3] text-white font-bold rounded-full'
            onClick={() => setShowBooking(!showBooking)} // Pokaż widget po kliknięciu
          >
            {showBooking ? 'Zwiń' : 'Kup teraz'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
