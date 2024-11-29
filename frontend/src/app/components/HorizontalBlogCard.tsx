import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import CategoryLabel from './CategoryLabel';

function HorizontalBlogCard({ post }: any) {
  console.log('[HorizontalBlogCard]', post);
  return (
    <div className='flex flex-wrap items-stretch my-8 shadow-xl rounded-3xl overflow-hidden'>
      <div className='basis-3/12'>
        <Image
          src={post.image}
          alt=''
          sizes='100%'
          className='h-full w-full object-cover'
          width={800}
          height={600}
        />
      </div>
      <div className='flex flex-wrap items-end justify-between py-4 px-8 basis-9/12'>
        <div className='basis-9/12'>
          <div className='flex gap-4 items-center'>
            <div className='flex gap-2'>
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
            <p>{new Date(post.date).toLocaleDateString()}</p>
          </div>
          <p className='text-2xl my-4 font-bold'>{post.title}</p>
          {/* <p>{post.excerpt}</p> */}
        </div>
        <div className='flex basis-2/12'>
          <Link
            href={`/Blog/${post.slug}`}
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

export default HorizontalBlogCard;
