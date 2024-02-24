import type { Metadata } from 'next';
import './globals.css';
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
    <html lang='en'>
      <body className={`${jakarta.className} antialiased`}>
        <AppNavbar />
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WZ7N3E1HT3"></Script>
        <Script id='google-analytics' dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WZ7N3E1HT3');
          `,
        }}>
        </Script>
      </body>
    </html>
  );
}
