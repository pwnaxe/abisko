'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className='w-full flex justify-center items-center fixed top-0 py-4 px-5 md:px-11 z-50 text-white '
      role='navigation'
    >
      <div className='flex items-center w-full max-w-6xl'>
        <div className='flex gap-x-4 text-xl'>
        <Link href='https://expeditionlapland.com'>
          <Image src='/svg/logoWhite.svg' alt='Abisko' width={136} height={70} />
        </Link>
        </div>
        <div className='hidden md:flex gap-x-6 text-xl flex-grow justify-center'>
          <Link href='/Attractions'>Atrakcje</Link>
          <Link href='/Concierge'>Concierge</Link>
          <Link href='/Zorza'>Zorza Polarna</Link>
          <Link href='/Blog'>Blog</Link>
          <Link href='/Guides'>Poradniki</Link>
          <Link href='/AboutUs'>O nas</Link>
        </div>
        <div className='hidden md:flex items-center w-32'>
          <button className='gap-2 flex flex-row'>
            <Image src='/svg/polish.svg' alt='PL' width={20} height={20} />
            <span>PL</span>
          </button>
        </div>
      </div>

      {/* KOMPONENT HAMBURGER */}
      <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} aria-label='Toggle menu'>
            <FiMenu size={28} />
          </button>
        </div>
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center justify-center h-screen py-6 space-y-6 md:hidden text-2xl font-semibold uppercase'>
          <Link href='/Attractions' onClick={toggleMenu} className='hover:scale-150 transition-transform'>Atrakcje</Link>
          <Link href='/Aurora' onClick={toggleMenu} className='hover:scale-150 transition-transform'>Aurora</Link>
          <Link href='/Blog' onClick={toggleMenu} className='hover:scale-150 transition-transform'>Blog</Link>
          <Link href='/Guides' onClick={toggleMenu} className='hover:scale-150 transition-transform'>Poradniki</Link>
          <Link href='/AboutUs' onClick={toggleMenu} className='hover:scale-150 transition-transform'>O nas</Link>
          <button className='gap-2 flex flex-row' onClick={toggleMenu}>
            <Image src='/svg/polish.svg' alt='PL' width={20} height={20} />
            <span>PL</span>
          </button>
        </div>
      )}
    </nav>
  );
}
