import { poppins } from '@/app/fonts';
import { Button } from '@nextui-org/react';
import '@/lib/fontawesome/css/fa.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {

  return (
    <main>
      <section className='h-[calc(100dvh-4rem)]'>
        <div className='flex h-full w-2/5 flex-col justify-between px-10 pt-16'>
          <div className='w-full'>
            <h1
              className={`text-6xl font-semibold ${poppins.className} leading-tight`}
            >
              Rezervă-ți vacanța ideală la {' '}
              <span
                className='bg-gradient-to-r from-primary-gradient-stop to-accent-gradient-stop bg-clip-text text-transparent'>
                Vila Diana
              </span>
              {' '}în Poiana Brașov
            </h1>
          </div>
          <div className='flex w-full py-5'>
            <Button
              size='lg'
              radius='full'
              className='mr-4 flex-grow bg-secondary-150'
            >
              Rezerva acum
              <i className='fa-regular fa-arrow-up-right'></i>
            </Button>
            <Button
              size='lg'
              radius='full'
              className='flex-grow border border-black bg-white'
            >
              Vezi mai multe despre noi
            </Button>
          </div>
          <p className='text-xl font-medium'>
            Vila Diana ofera servicii de cazare in Poiana Brasov. Vila a intrat
            in circuitul turistic in vara lui 2003 si a fost renovata complet in
            anul 2016, fiind clasificata de Ministerul Turismului cu conditii de
            cazare de 4 stele. Vila Diana este situata la intrarea in statiunea
            Poiana Brasov.
          </p>
          <div className='flex pb-12 pt-5'>
            <div className='align-center flex w-1/3 flex-col justify-center border-r border-r-black pr-6 text-center'>
              <h1 className='mb-2 text-4xl font-bold'>9</h1>
              <p className='text-lg font-medium leading-tight'>
                camere de cazare
              </p>
            </div>
            <div className='align-center flex w-1/3 flex-col justify-center border-r border-r-black px-6 text-center'>
              <h1 className='mb-2 text-4xl font-bold'>9.2/10</h1>
              <p className='text-lg font-medium leading-tight'>
                rating-ul vizitatorilor
              </p>
            </div>
            <div className='align-center flex w-1/3 flex-col justify-center pl-6 text-center'>
              <h1 className='mb-2 text-4xl font-bold'>900m</h1>
              <p className='text-lg font-medium leading-tight'>
                distanta pana la partia Bradul
              </p>
            </div>
          </div>
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </section>
    </main>
  );
}
