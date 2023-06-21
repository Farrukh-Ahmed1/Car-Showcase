import { Footer, Navbar } from '@/components';
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}