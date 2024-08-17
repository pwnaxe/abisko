import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function BlogCard() {
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
      </div>
      <div className='p-4'>
        <div className='flex gap-4'>
          <div>Kategorie</div>
          <p>Data publikacji</p>
        </div>
        <p className='text-2xl my-4 font-bold'>
          Tytuł poradnika lub bloga który ma więcej niż jedną linijkę, posiada
          nawet trzy linijki.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sed tellus venenatis est molestie. Nulla quis est efficitur, cursus
          odio et sagittis pretium. Mauris ac purus quis est dictum sodales.
          Phasellus convallis eu est et tempus. Vestibulum sed tellus venenatis
          est molestie. Suspendisse a cursus...
        </p>
        <div className='flex justify-end'>
          <Link
            href='/Blog/sample-post'
            className='py-4 flex gap-2 items-center'
          >
            Czytaj więcej
            <MdArrowOutward size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
