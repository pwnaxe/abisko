import Image from 'next/image';
import React from 'react';

function SmallBlogCard() {
  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative h-full '>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent'></div>
        <Image
          src='/img/hero.png'
          alt=''
          sizes='100%'
          className='h-full w-auto'
          width={400}
          height={300}
        />
        <div className='px-4 pt-6 pb-8 absolute bottom-0 left-0 bg-transparent'>
          <p className='text-2xl font-bold text-white'>Tytuł poradnika/bloga</p>
          <p className='text-white my-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            est efficitur, interdum mauris et, laoreet leo. Praesent cursus odio
            et sagittis pretium.
          </p>

          <button className='px-6 py-2 text-white font-bold rounded-full'>
            Kup teraz
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallBlogCard;
