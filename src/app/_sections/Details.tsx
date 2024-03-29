import Image from 'next/image';
import { poppins } from '@/app/fonts';
import { Button, Link } from '@nextui-org/react';

export default function Details() {
  return (
    <section className='mb-24 mt-10 px-[16px] max-md:mb-12'>
      <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl bg-secondary-100 py-24 max-md:py-12'>
        <div className='flex w-[90%] xl:w-3/4 justify-center'>
          <div>
            <Image
              src={'/home_section2/1.png'}
              alt='1'
              width={100}
              height={100}
              className='mt-5 rounded-full max-lg:hidden'
            />
            <Image
              src={'/home_section2/2.png'}
              alt='2'
              width={100}
              height={100}
              className='ml-32 mt-5 rounded-full max-lg:hidden'
            />
          </div>
          <div>
            <h1
              className={`text-6xl font-semibold max-md:text-3xl ${poppins.className} text-center leading-tight`}
            >
              Cauti cazare in{' '}
              <span className='bg-gradient-to-r from-primary-gradient-stop to-accent-gradient-stop bg-clip-text text-transparent'>
                Poiana Brasov
              </span>
              ?
            </h1>
            <div className='mt-8 flex items-center justify-center max-md:flex-col max-md:gap-4'>
              <Button
                as={Link}
                href='https://vila-diana-9.pynbooking.direct'
                target='_blank'
                size='lg'
                radius='full'
                className='bg-primary-800 px-10 text-white max-md:w-full md:mr-4'
              >
                Rezerva acum
                <i className='fa-regular fa-arrow-up-right'></i>
              </Button>
              <Button
                as={Link}
                size='lg'
                radius='full'
                className='bg-white px-10 max-md:w-full'
                href='/accommodation'
              >
                Vezi camerele noastre
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={'/home_section2/3.png'}
              alt='3'
              width={100}
              height={100}
              className='ml-32 mt-5 rounded-full max-lg:hidden'
            />
            <Image
              src={'/home_section2/4.png'}
              alt='4'
              width={100}
              height={100}
              className='mt-5 rounded-full max-lg:hidden'
            />
          </div>
        </div>
        <p className='mt-16 w-1/2 text-center max-md:mt-8 max-md:w-4/5'>
          Situată la intrarea în Poiana Braşov, Vila Diana te întâmpină mereu cu
          bucurie, fiindu-ţi căminul de la munte, din care poţi explora
          împrejurimile. Fie că pleci într-o plimbare prin staţiune, fie într-o
          drumeţie prin frumoşii munţi ce te înconjoară, aerul tare, puternic
          ozonat, îţi va da energie şi bună dispoziţie. Iar seara vei avea un
          motiv în plus să savurezi mâncărurile şi băuturile de la
          restaurantele, terasele sau cabanele din zonă. Tradiţionale sau
          moderne, acestea te vor remonta si pregăti pentru o nouă zi de vis a
          vacanţei tale.
        </p>
        <div className='mt-16 flex w-1/2 items-center justify-center'>
          <div className='mr-5 h-0.5 w-full bg-background-300' />
          <h2 className='${poppins.className} text-3xl font-semibold'>
            Facilitati
          </h2>
          <div className='ml-5 h-0.5 w-full bg-background-300' />
        </div>
        <div className='mt-8 grid grid-cols-4 grid-rows-2 gap-x-24 gap-y-10 max-md:grid-cols-2 max-md:gap-x-10'>
          <div className='flex flex-col items-center justify-center'>
            <i className='fa fa-wifi text-6xl text-primary-800' />
            <p className='mt-2 text-medium font-medium'>Wi-Fi gratuit</p>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-concierge-bell text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Receptie 24/24</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-parking text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Parcare</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-plate-utensils text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Sala de mese</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-bed-front text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Curatenie zilnica</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-door-open text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Camere moderne</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-dice text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Activitati indoor</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <i className='fa fa-mug-hot text-6xl text-primary-800' />
              <p className='mt-2 text-medium font-medium'>Bauturi calde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
