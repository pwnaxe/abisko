'use client';

import { CiSearch } from 'react-icons/ci';
import AttractionCard from '../components/AttractionCard';
import SmallBlogCard from '../components/SmallBlogCard';
import CheckfrontWidget from '@/components/checkfront';

export default function AttractionsPage() {
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
          
          <AttractionCard
            title="Trollsjön"
            rating={4.8}
            location="Laponia"
            duration="3 godziny"
            price={250}
          />
          <CheckfrontWidget widgetId="CHECKFRONT_WIDGET_01" itemId="6" categoryId="2" />

          <AttractionCard
            title="Fjords"
            rating={4.7}
            location="Norwegia"
            duration="5 godzin"
            price={400}
          />
          <CheckfrontWidget widgetId="CHECKFRONT_WIDGET_02" itemId="31,32" categoryId="2" />

          <AttractionCard
            title="Aurora Snowmobile"
            rating={4.9}
            location="Abisko"
            duration="8 godzin"
            price={350}
          />
          <CheckfrontWidget widgetId="CHECKFRONT_WIDGET_03" itemId="38,39" categoryId="3" />
        </div>
      </div>
    </>
  );
}
