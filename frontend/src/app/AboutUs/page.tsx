import Navbar from '@/app/components/Navbar';
import Image from 'next/image';

const back = {
    zIndex: -1,
};

export default function AboutUsPage() {
  return (
    <>
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
    <div className='p-20 text-black w-4/5 mx-auto'>
    <div className='flex pb-10'>
      <Image src='/img/AboutUs.png' alt='ImageofCrew' width={515} height={515} />
      <div className='p-10'>
      <h2 className='text-3xl'>Kim jesteśmy?</h2>
      <p className='text-xl'>Phasellus vulputate maximus dolor eu porttitor. Duis ullamcorper molestie magna, id mattis lorem eleifend a. Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus. Cras eleifend est ac aliquet cursus. Phasellus nulla dolor, tristique vel fringilla sit amet, dictum sed arcu. Vivamus massa sapien, imperdiet non erat sit amet, vehicula pharetra tortor. Morbi eu metus odio. Integer a nibh non enim lacinia vestibulum. Vivamus in aliquam mi. Curabitur sed urna at quam congue sollicitudin lectus.
      Donec blandit sodales augue vitae feugiat. In condimentum fermentum est, in gravida lacus laoreet vitae. Sed luctus, mauris in hendrerit mollis, orci orci vehicula nibh, sed auctor tortor dolor nec mauris. Maecenas vel facilisis augue, nec viverra erat. Curabitur feugiat lorem ac est porttitor egestas. Etiam placerat vestibulum urna, quis rhoncus nunc volutpat sit amet. Suspendisse tortor.
      </p>
      <h3 className='text-xl text-aquamarine-400'>Sylwia i Łukasz</h3>
      <Image src='/img/sign.png' alt='sign' width={150} height={80} className='' />
      </div>
    </div>
    </div>
    <div className='relative w-screen h-[48vh] text-black'>
    <Image src='/img/AboutUs.webp' alt='background' fill
        style={back}
        className="object-cover bg-aquamarine-400 opacity-55" />
    <div className='relative z-10'>
    <p className='text-3xl mx-auto pt-28 text-center'>
  Piękno Laponii urzekło nas od pierwszego <br /> spojrzenia. 
  Ta <strong className="font-bold">magiczna kraina</strong> stała się naszym <br />
  <strong className="font-bold">domem</strong>, 
  miejscem, gdzie każdy dzień przynosi<br /> nowe, niezapomniane przygody.
</p>
    </div>
    </div>
    </>
  );
}
