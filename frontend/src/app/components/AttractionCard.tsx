import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { MdOutlineTimer } from 'react-icons/md';

function AttractionCard() {
  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative'>
        <Image
          src='/img/hero.png'
          alt=''
          sizes='100%'
          className='w-full'
          width={400}
          height={300}
        />
        <p className='absolute top-4 left-4 rounded-full text-white px-4 py-2 bg-[#00284D]'>
          Nowość
        </p>
        <p className='absolute top-4 right-4 rounded-full text-white px-4 py-2 bg-[#00284D]/40 flex gap-1 items-center'>
          <FaStar size={18} /> 4.9
        </p>
      </div>
      <div className='p-4'>
        <p className='text-2xl font-bold'>
          Fjords Sightseeing and Photography Tour (Autumn/Winter)
        </p>

        <div className='flex gap-8 my-4'>
          <p className='flex gap-2 items-center'>
            <LiaMapMarkerAltSolid /> Lokalizacja
          </p>
          <p className='flex gap-2 items-center'>
            <MdOutlineTimer /> 4 godziny
          </p>
        </div>
        <div className='flex justify-between items-center my-4'>
          <p className='text-3xl font-extrabold text-[#00B7A3]'>1000 zł</p>
          <button className='px-6 py-2 bg-[#00B7A3] text-white font-bold rounded-full'>
            Kup teraz
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
