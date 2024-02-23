import '@/lib/fontawesome/css/fa.css';
import 'react-photo-view/dist/react-photo-view.css';
import Footer from '@/components/Footer';
import Landing from '@/app/_sections/Landing';
import Details from '@/app/_sections/Details';
import Location from '@/app/_sections/Location';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Landing />
        <Details />
        <Location />
      </main>
      <Footer />
    </>
  );
}
