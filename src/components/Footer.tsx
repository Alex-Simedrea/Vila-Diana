import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex bg-secondary-100 py-8 items-center justify-center gap-32 max-md:flex-col max-md:gap-10'>
      <div>
        <Image
          src={'/logo-landscape-stars.png'}
          alt='logo'
          width={200}
          height={50}
        />
        <p className='ml-4 text-medium font-semibold'>
          Copyright © 2024 Vila Diana
        </p>
      </div>
      <div className='max-md:flex max-md:items-center max-md:flex-col'>
        <h2 className='mb-4 font-bold'>Contact</h2>
        <div className='max-md:flex max-md:items-center max-md:flex-col'>
          <p>rezervari@vila-diana.com</p>
          <p>contact@vila-diana.com</p>
          <p>+40 730 710 996</p>
        </div>
      </div>
      <div className='max-md:flex max-md:items-center max-md:flex-col max-md:w-3/5'>
        <h2 className='mb-4 font-bold'>Legal</h2>
        <div className='max-md:flex max-md:items-center max-md:flex-col'>
          <p>Termeni si conditii</p>
          <p className='text-center'>Regulament ordine interioara si spatii de uz comun</p>
          <p>ANPC</p>
        </div>
      </div>
    </footer>
  );
}
