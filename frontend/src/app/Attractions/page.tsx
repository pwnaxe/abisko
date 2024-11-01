'use client';

import { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import AttractionCard from '../components/AttractionCard';
import SmallBlogCard from '../components/SmallBlogCard';

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    // Fetching attractions data from API/endpoint
    const fetchAttractions = async () => {
      try {
        const response = await fetch('/api/attractions'); // Zakładamy, że endpoint '/api/attractions' zwraca dane atrakcji
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Błąd podczas pobierania atrakcji:', error);
      }
    };

    fetchAttractions();
  }, []);

  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/AboutUs.webp)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-24 z-10'>
          <p className='subtitle text-center'>Odkryj Laponię</p>
          <p className='pageTitle'>Znajdź atrakcje dla siebie i bliskich</p>
          <div className='px-4'>
            <form className='px-4 py-2 rounded-full w-full my-8 bg-white/75 relative'>
              <input
                type='text'
                placeholder='Światła na niebie'
                className='rounded-full w-full bg-transparent outline-none text-black'
              />
              <button
                type='submit'
                className='absolute top-1/2 -translate-y-1/2 right-8'
              >
                <CiSearch size={24} color={'#000'} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='grid grid-cols-1 md:grid-cols-3 my-8 gap-6'>
          <SmallBlogCard />
          {attractions.length > 0 ? (
            attractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                title={attraction.title}
                rating={attraction.rating}
                location={attraction.location}
                duration={attraction.duration}
                price={attraction.price}
                widgetId={`CHECKFRONT_WIDGET_${attraction.id}`}
                itemId={attraction.itemId}
                categoryId={attraction.categoryId}
                host={attraction.host}
              />
            ))
          ) : (
            <p>Ładowanie atrakcji...</p>
          )}
        </div>
      </div>
    </>
  );
}
