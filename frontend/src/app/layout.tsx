import type { Metadata } from 'next';
import { nunito, lora } from './fonts';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Abisko',
  description: 'Take Your Journey and Discover the Magic of Lapland',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${nunito.variable} ${lora.variable}`}>
      <body className='font-nunito'>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
