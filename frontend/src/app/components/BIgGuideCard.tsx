'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import CategoryLabel from './CategoryLabel';

function BigGuideCard({ post, isLoading }: { post: any; isLoading: boolean }) {
  console.log('[BIG GUIDE CARD]', post);
  if (!isLoading) {
    return <p className='text-xl text-red-500'>Loading....</p>;
  }
  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative h-full'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent'></div>
        <Image
          src={post.image}
          alt=''
          sizes='100%'
          className='h-auto w-full object-cover max-h-[500px]'
          width={400}
          height={300}
        />
        <div className='py-4 px-8 absolute bottom-0 left-0 bg-transparent w-full'>
          <div className='w-1/2'>
            <div className='flex gap-2 mb-2'>
              {post.category.length > 0 &&
                post.category.map((category: any) => (
                  <CategoryLabel
                    key={category.name}
                    name={category.name}
                    color={category.color}
                    setCurrentCategory=''
                  />
                ))}
            </div>
            <p className='text-2xl font-bold text-white'>{post.title}</p>
            <p className='text-white my-8'>{post.excerpt}</p>
          </div>

          <div className='flex justify-between items-center text-white'>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <Link
              href={`/Guides/${post.slug}`}
              className='py-4 flex gap-2 items-center'
            >
              Czytaj więcej
              <MdArrowOutward size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigGuideCard;
