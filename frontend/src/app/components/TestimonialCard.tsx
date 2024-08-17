import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR } from 'react-icons/ri';

const stars = [1, 2, 3, 4, 5];

function TestimonialCard() {
  return (
    <div className='bg-white shadow-xl px-8 pt-24 pb-12 rounded-3xl relative'>
      <div className='absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-gray-400 rounded-full'></div>
      <p className='text-center text-sm'>
        Nic dodać, nic ująć - fajnie było! Dzięki Sylwii i Łukaszowi nie byliśmy
        zagubieni, spędzieliśmy miło czas i z pewnością wrócimy prędko!
      </p>
      <div className='flex flex-col items-center justify-center my-4'>
        <p className='font-bold'>Monika, Szwajcaria</p>
        <div className='flex gap-2 mt-2'>
          {stars.map((star) => (
            <FaStar size={18} color={'#00B7A3'} />
          ))}
        </div>
      </div>
      <div className='absolute -bottom-8 right-6'>
        <RiDoubleQuotesR size={86} color={'#00284D'} />
      </div>
    </div>
  );
}

export default TestimonialCard;
