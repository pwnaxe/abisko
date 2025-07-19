import type { Metadata } from 'next';
import Footer from '../components/Footer';

<<<<<<< HEAD
export const metadata: Metadata = {
  title: 'Abisko | Guides',
  description: 'Take Your Journey and Discover the Magic of Lapland',
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
=======

export const metadata: Metadata = {
  title: 'Abisko | Concierge',
  description: 'Take Your Journey and Discover the Magic of Lapland',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
>>>>>>> e91bdd4b4c90367c7a21d3313695ce1751186240
  return (
    <>
      {children}
      <Footer page='' />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e91bdd4b4c90367c7a21d3313695ce1751186240
