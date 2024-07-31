import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const back = {
  zIndex: -1,
};

export default function Hero() {
  return (
    <main className='w-full h-auto'>
      <Image
        src='/img/hero.png'
        fill
        alt='Abisko'
        sizes="100vw"
        quality={80}
        style={back}
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Navbar />
      <Image src='/svg/Arrow.svg' alt='ArrowLeft' width={47} height={47} className='absolute top-1/2 left-10' />
      <Image src='/svg/Arrow.svg' alt='ArrowRight' width={47} height={47} className='absolute top-1/2 right-10 transform scale-x-[-1]' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <h2 className='text-lg font-bold text-center uppercase opacity-60 tracking-widest mb-7'>Twoja podróż zaczyna się tutaj</h2>
      <h1 className='text-7xl text-center'>Wyrusz w podróż <br />
      i odkryj magię Laponii</h1>
      <div className='flex justify-center mt-7 gap-4'> 
      <button className='border border-white rounded-full px-5 py-3'>Odkryj Laponię</button>
      <button className='border border-white rounded-full px-5 py-3'>Przygotuj się do wyjazdu</button>
      <button className='border border-white rounded-full px-5 py-3'>Znajdź atrakcje</button>
      </div>
      </div>
      <Footer />
    </main>
  );
}
