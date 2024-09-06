'use client';

import { CiSearch } from 'react-icons/ci';
import AttractionCard from '../components/AttractionCard';
import SmallBlogCard from '../components/SmallBlogCard';
import Script from 'next/script';

export default function AttractionsPage() {
  return (
    <>
      {/* Sekcja tła z formularzem wyszukiwania */}
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/AboutUs.webp)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-24 z-10'>
          <p className='subtitle text-center'>Odkryj Laponię</p>
          <p className='font-lora text-3xl'>
            Znajdź atrakcje dla siebie i bliskich
          </p>
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

      {/* Wyświetlanie kart atrakcji */}
      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='grid grid-cols-1 md:grid-cols-3 my-8 gap-6'>
          <SmallBlogCard />
          <AttractionCard
            title="Fjords Sightseeing and Photography Tour (Autumn/Winter)"
            rating="4.9"
            location="Fjords"
            duration="4 godziny"
            price="1000"
            widgetId="CHECKFRONT_WIDGET_01"
            checkfrontId="2" // ID dla atrakcji Fjords
          />
          <AttractionCard
            title="Hikes in Abisko"
            rating="4.7"
            location="Abisko"
            duration="6 godzin"
            price="800"
            widgetId="CHECKFRONT_WIDGET_02"
            checkfrontId="4" // ID dla atrakcji Hikes
          />
        </div>
      </div>

      {/* Skrypt Checkfront */}
      <Script
        src="//explorearctic.checkfront.com/lib/interface--0.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
