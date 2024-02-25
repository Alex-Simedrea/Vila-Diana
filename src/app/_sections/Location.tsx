import { poppins } from '@/app/fonts';
import { Link } from '@nextui-org/react';

export default function Location() {
  return (
    <section className='mb-24 flex px-6 max-md:flex-col max-md:px-[16px]'>
      <div className='flex w-1/2 flex-col justify-between pl-14 pr-7 max-md:w-full max-md:px-0'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} leading-tight max-md:mb-4 max-md:text-3xl`}
        >
          Suntem aproape de{' '}
          <span className='bg-gradient-to-r from-primary-gradient-stop to-accent-gradient-stop bg-clip-text text-transparent'>
            atractii remarcabile
          </span>{' '}
        </h1>
        <div className='mt-auto flex w-9/12 flex-col gap-4 max-md:w-full max-md:gap-2'>
          <div className='flex items-center rounded-md bg-accent-50 py-4'>
            <i className='fa fa-house-building mx-8 text-4xl text-accent-700 max-md:mx-4'></i>
            <Link
              className='mr-4 flex flex-col items-start'
              href='https://maps.app.goo.gl/o79oSRJGn2y1MXPs6'
              target='_blank'
            >
              <h4 className='text-medium font-bold'>
                Centrul Vechi Brasov - Piata Sfatului
                <i className='fa fa-arrow-up-right-from-square ml-2 text-lg'></i>
              </h4>
              <p className='text-medium font-medium'>20 de minute</p>
            </Link>
          </div>
          <div className='flex items-center rounded-md bg-accent-50 py-4'>
            <i className='fa fa-bags-shopping mx-8 text-4xl text-accent-700 max-md:mx-4'></i>
            <Link
              className='mr-4 flex flex-col items-start'
              href='https://maps.app.goo.gl/TGvSTa5Hm5xXWYVaA'
              target='_blank'
            >
              <h4 className='text-medium font-bold'>
                AFI Brasov
                <i className='fa fa-arrow-up-right-from-square ml-2 text-lg'></i>
              </h4>
              <p className='text-medium font-medium'>25 de minute</p>
            </Link>
          </div>
          <div className='flex items-center rounded-md bg-accent-50 py-4'>
            <i className='fa fa-t-rex mx-8 text-4xl text-accent-700 max-md:mx-4'></i>
            <Link
              className='mr-4 flex flex-col items-start'
              href='https://maps.app.goo.gl/boTC3khKXmocQMHw6'
              target='_blank'
            >
              <h4 className='text-medium font-bold'>
                Dino Parc Rasnov
                <i className='fa fa-arrow-up-right-from-square ml-2 text-lg'></i>
              </h4>
              <p className='text-medium font-medium'>10 minute</p>
            </Link>
          </div>
          <div className='flex items-center rounded-md bg-accent-50 py-4'>
            <i className='fa fa-hippo mx-8 text-4xl text-accent-700 max-md:mx-4'></i>
            <Link
              className='mr-4 flex flex-col items-start'
              href='https://maps.app.goo.gl/NQcpzeQ5qtmrJppj9'
              target='_blank'
            >
              <h4 className='text-medium font-bold'>
                Zoo Brasov
                <i className='fa fa-arrow-up-right-from-square ml-2 text-lg'></i>
              </h4>
              <p className='text-medium font-medium'>35 de minute</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-1/2 pl-7 pr-14 max-md:mt-4 max-md:w-full max-md:px-0'>
        <iframe
          width='100%'
          height='550'
          src='https://maps.google.com/maps?width=100%25&amp;height=550&amp;hl=en&amp;q=Vila%20Diana%20-%20Poiana%20Bra%C8%99ov+(Vila%20Diana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </div>
    </section>
  );
}
