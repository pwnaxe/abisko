import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';

export default function Home() {
  return (
    <main className='w-full h-auto'>
      <HeroSlider />
      <Footer page='home' />
    </main>
  );
}
