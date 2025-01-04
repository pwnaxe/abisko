'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


function SmallBlogCard({ title, shortContent, poster, slug, className }) {
  const posterUrl = `https://api.expeditionlapland.com${poster}`;

  return (
    <div className={`shadow-xl rounded-3xl overflow-hidden ${className}`}>
      <div className='relative h-full'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent'></div>
        <Image
          src={posterUrl}
          alt={title || 'zdjecie'}
          width={300}
          height={200}
          loading="lazy"
        />
        <div className='px-4 pt-6 pb-4 absolute bottom-0 left-0 bg-transparent'>
          <h1 className='text-2xl font-bold text-white'>{title}</h1>
          {/* <BlocksRenderer
            content={shortContent}
            blocks={{
              paragraph: ({ children }) => <p className="text-white max-w-prose">{children}</p>,
              heading: ({ children, level }) => {
                const HeadingTag = `h${level}`;
                return <HeadingTag className="text-white font-bold">{children}</HeadingTag>;
              },
              link: ({ children, url }) => <Link href={url}>{children}</Link>,
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>,
              italic: ({ children }) => <em>{children}</em>,
            }}
          /> */}
          <Link
            href={`/Blog/${slug}`}
            className='inline-block px-6 py-2 mt-2 border text-white font-bold rounded-full'
          >
            Czytaj więcej
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmallBlogCard;
