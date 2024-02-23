import { poppins } from '@/app/fonts';
import { Button, Link } from '@nextui-org/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Landing() {
  return (
    <section className='flex h-[calc(100dvh-4rem)] px-[16px] pb-6 max-md:flex-col'>
      <div className='flex flex-col justify-center md:w-2/5 md:px-10 md:pt-16'>
        <div className='mb-4 mt-6 w-full'>
          <h1
            className={`text-6xl font-semibold ${poppins.className} leading-tight max-xl:text-5xl max-md:text-3xl`}
          >
            Rezervă-ți vacanța ideală la{' '}
            <span className='bg-gradient-to-r from-primary-gradient-stop to-accent-gradient-stop bg-clip-text text-transparent'>
              Vila Diana
            </span>{' '}
            în Poiana Brașov
          </h1>
        </div>
        <div className='flex w-full py-5 max-xl:flex-col max-xl:gap-4 max-md:hidden'>
          <Button
            as={Link}
            href='https://vila-diana-9.pynbooking.direct'
            target='_blank'
            size='lg'
            radius='full'
            className='flex-grow bg-secondary-150 xl:mr-4'
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
        <p className='text-xl font-medium max-xl:text-lg max-lg:text-medium max-md:hidden'>
          Vila Diana ofera servicii de cazare in Poiana Brasov. Vila a intrat in
          circuitul turistic in vara lui 2003 si a fost renovata complet in anul
          2016, fiind clasificata de Ministerul Turismului cu conditii de cazare
          de 4 stele. Vila Diana este situata la intrarea in statiunea Poiana
          Brasov.
        </p>
        <div className='flex pb-12 pt-5 max-md:hidden'>
          <div className='align-center flex w-1/3 flex-col justify-center border-r border-r-black pr-6 text-center'>
            <h3 className='mb-2 self-center text-4xl font-bold max-xl:text-3xl max-lg:text-xl'>
              7
            </h3>
            <p className='self-center text-lg font-medium leading-tight max-xl:text-medium max-lg:text-sm'>
              camere de cazare
            </p>
          </div>
          <div className='align-center flex w-1/3 flex-col justify-center border-r border-r-black px-6 text-center'>
            <h3 className='mb-2 self-center text-4xl font-bold max-xl:text-3xl max-lg:text-xl'>
              9.2/10
            </h3>
            <p className='self-center text-lg font-medium leading-tight max-xl:text-medium max-lg:text-sm'>
              rating-ul vizitatorilor
            </p>
          </div>
          <div className='align-center flex w-1/3 flex-col justify-center pl-6 text-center'>
            <h3 className='mb-2 self-center text-4xl font-bold max-xl:text-3xl max-lg:text-xl'>
              900m
            </h3>
            <p className='self-center text-lg font-medium leading-tight max-xl:text-medium max-lg:text-sm'>
              distanta pana la partia Bradul
            </p>
          </div>
        </div>
      </div>

      <div className='relative max-md:h-0 max-md:grow md:w-3/5 md:pr-6'>
        <Carousel className='h-full' autoplay>
          <CarouselContent className='h-full'>
            <CarouselItem>
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='/carousel/1.png'
                  alt='carousel1'
                  className='!h-full w-full self-start overflow-hidden rounded-large object-cover max-md:rounded-3xl'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='/carousel/2.png'
                  alt='carousel2'
                  className='!h-full w-full self-start overflow-hidden rounded-large object-cover max-md:rounded-3xl'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='/carousel/3.png'
                  alt='carousel3'
                  className='!h-full w-full self-start overflow-hidden rounded-large object-cover max-md:rounded-3xl'
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className='absolute right-0 top-0 z-10 max-md:hidden'>
          <div className='flex'>
            <div className='h-[35px] w-[35px] shrink-0 rounded-[0px_20px_0px_0px] shadow-[14px_-17px_0px_3px_#FFF]' />
            <div className='z-20 flex items-center gap-3.5 rounded-bl-md bg-white py-3 pl-4 pr-10 text-[0.9rem] font-medium'>
              <a href='tel:+40730710996' className='flex gap-2.5'>
                <i className='fa-regular fa-phone text-[1.25rem]' />
                <p className='mr-2'>+40 730 710 996</p>
              </a>
              <a
                href='mailto:rezervari@vila-diana.com'
                className='flex gap-2.5'
              >
                <i className='fa-regular fa-envelope text-[1.25rem]'></i>
                <p>rezervari@vila-diana.com</p>
              </a>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='h-[35px] w-[35px] shrink-0 self-start rounded-[0px_20px_0px_0px] shadow-[14px_-17px_0px_3px_#FFF]' />
            <div className='z-10 rounded-bl-md bg-white py-2 pl-4 pr-10 text-[1.5rem]'>
              <a
                target='_blank'
                href='https://www.facebook.com/profile.php?id=100075897819542'
              >
                <i className='fa-brands fa-facebook mr-5' />
              </a>
              <a
                target='_blank'
                href='https://www.instagram.com/vila_diana_poiana_brasov_/'
              >
                <i className='fa-brands fa-instagram' />
              </a>
            </div>
          </div>
          <div className='flex justify-end pr-6'>
            <div className='h-[35px] w-[35px] shrink-0 self-start rounded-[0px_20px_0px_0px] shadow-[14px_-17px_0px_3px_#FFF]' />
          </div>
        </div>
      </div>
      <Button
        size='lg'
        radius='full'
        className='mt-4 h-0 flex-grow border border-black bg-white max-md:max-h-10 max-md:min-h-10 md:hidden'
      >
        Vezi mai multe despre noi
        <i className='fa fa-arrow-right' />
      </Button>
    </section>
  );
}
