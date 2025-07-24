import type { Metadata } from 'next';
import Footer from '../components/Footer';

<<<<<<< HEAD
=======

>>>>>>> 2988218 (added raport.md)
export const metadata: Metadata = {
  title: 'Abisko | Concierge',
  description: 'Take Your Journey and Discover the Magic of Lapland',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer page='' />
    </>
  );
}
