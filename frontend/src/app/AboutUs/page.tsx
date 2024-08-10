import Navbar from '@/app/components/Navbar';
import Image from 'next/image';

const back = {
    zIndex: -1,
};

export default function AboutUsPage() {
  return (
    <div className="relative w-screen h-[48vh]">
      <Image
        src='/img/AboutUs.webp'
        alt='Abisko'
        fill
        style={back}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      <Navbar />
      <div className='relative z-10 mx-auto p-20'>
        <h2 className='text-xl text-aquamarine-400 text-center uppercase'>poznajmy się</h2>
        <h1 className='text-4xl text-center'>Jesteśmy tu dla Ciebie z miłości do Laponii</h1>
      </div>
    </div>
  );
}
