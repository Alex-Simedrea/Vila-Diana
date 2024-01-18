import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/providers';
import { jakarta } from '@/app/fonts';
import AppNavbar from '@/components/Navbar';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Vila Diana | Cazare Poiana Brasov',
  description: 'Poiana Brasov',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased`}>
        <Providers>
          <AppNavbar />
          {children}
        </Providers>
      </body>
    <Script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js' />
    </html>
  );
}
