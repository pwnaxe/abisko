import { IoLogoFacebook } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer({ page = '' }: { page: string }) {
  return (
    <footer
      className={`${
        page === 'home'
          ? 'max-w-screen-2xl w-full flex flex-row justify-between p-6 absolute bottom-0 left-1/2 -translate-x-1/2 items-center text-white'
          : 'w-full p-6 bg-[#00284D] text-white'
      }`}
    >
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center px-4 w-full'>
        <div className='flex gap-x-2.5 items-center'>
          <div className=''>
            <a
              href='https://www.facebook.com/abiskocafe'
              target='_blank'
              rel='noreferrer'
            >
              <IoLogoFacebook size={40} />
            </a>
          </div>
          <div className=''>
            <a
              href='https://www.instagram.com/abiskocafe'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={40} />
            </a>
          </div>
          <Link href='/Contact'>Skontaktuj się z nami</Link>
        </div>
        <div className='flex gap-x-4 text-sm'>
          <Link href='/Regulamin'>Regulamin</Link>
          <Link href='/PolitykaPrywatnosci'>Polityka Prywatności</Link>
        </div>
      </div>
    </footer>
  );
}
