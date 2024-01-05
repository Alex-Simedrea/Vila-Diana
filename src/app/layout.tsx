import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/providers';
import { jakarta } from '@/app/fonts';
import AppNavbar from '@/components/Navbar';

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
    </html>
  );
}
