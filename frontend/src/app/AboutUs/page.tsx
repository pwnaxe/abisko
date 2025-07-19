import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import TestimonialCard from '../components/TestimonialCard';

const back = {
  zIndex: -1,
};

export default function AboutUsPage() {
  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/AboutUs.webp)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-48 z-10'>
          <p className='subtitle text-center'>poznajmy się</p>
          <p className='pageTitle'>
            Jesteśmy tu dla Ciebie z miłości do Laponii
          </p>
        </div>
      </div>
      <div className='bg-white py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Co możemy dla Ciebie zrobić?</h2>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit
          scelerisque sed sed tellus. Cras eleifend est ac aliquet cursus. Phasellus nulla
          dolor, tristique vel fringilla sit amet, dictum sed arcu. Vivamus massa sapien.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Miejscowi</h3>
            <p className='text-gray-600'>Opis miejscowych przewodników.</p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Mamy wieloletnie doświadczenie</h3>
            <p className='text-gray-600'>Opis doświadczenia.</p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Certyfikowani przewodnicy</h3>
            <p className='text-gray-600'>Opis certyfikacji.</p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Sprawdzone firmy</h3>
            <p className='text-gray-600'>Opis współpracy z firmami.</p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Unikalne kierunki</h3>
            <p className='text-gray-600'>Opis unikalnych kierunków.</p>
          </div>
        </div>
      </div>
    </div>
      
      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='flex flex-wrap items-center my-16 '>
          <div className='basis-2/5'>
            <Image
              src='/img/AboutUs.png'
              alt='ImageofCrew'
              width={515}
              height={515}
              className='w-full h-auto'
            />
          </div>

          <div className='px-8 py-4 basis-3/5'>
            <h2 className='text-2xl'>Kim jesteśmy?</h2>
            <p className='text-sm my-4'>
              Phasellus vulputate maximus dolor eu porttitor. Duis ullamcorper
              molestie magna, id mattis lorem eleifend a. Donec sit amet quam
              magna. Nullam suscipit libero sit amet elit hendrerit scelerisque
              sed sed tellus. Cras eleifend est ac aliquet cursus. Phasellus
              nulla dolor, tristique vel fringilla sit amet, dictum sed arcu.
              Vivamus massa sapien, imperdiet non erat sit amet, vehicula
              pharetra tortor. Morbi eu metus odio. Integer a nibh non enim
              lacinia vestibulum. Vivamus in aliquam mi. Curabitur sed urna at
              quam congue sollicitudin lectus.
            </p>
            <p className='text-sm'>
              Donec blandit sodales augue vitae feugiat. In condimentum
              fermentum est, in gravida lacus laoreet vitae. Sed luctus, mauris
              in hendrerit mollis, orci orci vehicula nibh, sed auctor tortor
              dolor nec mauris. Maecenas vel facilisis augue, nec viverra erat.
              Curabitur feugiat lorem ac est porttitor egestas. Etiam placerat
              vestibulum urna, quis rhoncus nunc volutpat sit amet. Suspendisse
              tortor.
            </p>
            <h3 className='text-sm text-aquamarine-400'>Sylwia i Łukasz</h3>
            <Image
              src='/img/sign.png'
              alt='sign'
              width={150}
              height={80}
              className=''
            />
          </div>
        </div>
      </div>
      <div className='relative w-screen h-[48vh] text-black bg-[#00B7A3]/5'>
        <Image
          src='/img/AboutUs.webp'
          alt='background'
          fill
          style={back}
          className='object-cover opacity-25'
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          <p className='text-3xl mx-auto text-center'>
            Piękno Laponii urzekło nas od pierwszego <br /> spojrzenia. Ta{' '}
            <span className='font-bold'>magiczna kraina</span> stała się naszym{' '}
            <br />
            <span className='font-bold'>domem</span>, miejscem, gdzie każdy
            dzień przynosi
            <br /> nowe, niezapomniane przygody.
          </p>
        </div>
      </div>
      {/* <div className='bg-[#0082C8]/35'>
        <div className='max-w-screen-xl mx-auto text-black py-32 grid grid-cols-3 gap-8'>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div> */}
      <div className='max-w-screen-xl mx-auto text-black py-32 '>
        <p>Obserwuj na w social mediach</p>
      </div>
    </>
  );
}
