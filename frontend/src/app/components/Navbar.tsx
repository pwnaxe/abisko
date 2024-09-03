import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav
      className='max-w-screen-2xl flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 py-4 px-11 z-50 w-full text-white'
      role='navigation'
    >
      <Link href='/'>
        <Image src='/svg/logoWhite.svg' alt='Abisko' width={136} height={70} />
      </Link>
      <div className='flex gap-x-4'>
        <Link href='/Attractions'>Atrakcje</Link>
        <Link href='/Aurora'>Aurora</Link>
        <Link href='/Blog'>Blog</Link>
        <Link href='/Guides'>Poradniki</Link>
        <Link href='/AboutUs'>O nas</Link>
      </div>
      <div>
        <button className='flex flex-row gap-2 items-center'>
          <Image src='/svg/polish.svg' alt='PL' width={20} height={20} />
          PL
        </button>
      </div>
    </nav>
  );
}
