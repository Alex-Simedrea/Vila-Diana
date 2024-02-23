import Footer from '@/components/Footer';
import { poppins } from '@/app/fonts';
import '@/lib/fontawesome/css/fa.css';

export default function Contact() {
  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Contact
        </h1>
        <div className='mb-24 rounded-3xl bg-secondary-50 p-10 xl:px-32'>
          <h1
            className={`text-3xl font-semibold ${poppins.className} leading-tight max-xl:text-2xl max-md:text-xl`}
          >
            Te așteptăm cu drag la
            <span className='bg-gradient-to-r from-primary-gradient-stop to-accent-gradient-stop bg-clip-text text-transparent'>
              {' '}
              Vila Diana{' '}
            </span>
            în Poiana Brașov.
          </h1>
          <section className='flex pt-8 max-md:flex-col'>
            <div className='flex w-1/2 flex-col justify-between pr-7 max-md:w-full max-md:px-0'>
              <div className='flex flex-col gap-4 max-md:w-full max-md:gap-2'>
                <div className='flex items-center rounded-md bg-secondary-150 py-4'>
                  <i className='fa fa-phone mx-8 text-2xl text-secondary-700 max-md:mx-4'></i>
                  <div className='mr-4'>
                    <a href='tel:+40730710996' className='flex gap-2.5'>
                      <p className='font-semibold'>+40 730 710 996</p>
                    </a>
                  </div>
                </div>
                <div className='flex items-center rounded-md bg-secondary-150 py-4'>
                  <i className='fa fa-envelope mx-8 text-2xl text-secondary-700 max-md:mx-4'></i>
                  <div className='mr-4'>
                    <a
                      href='mailto:rezervari@vila-diana.com'
                      className='flex gap-2.5'
                    >
                      <p className='font-semibold'>rezervari@vila-diana.com</p>
                    </a>
                  </div>
                </div>
                <div className='flex items-center rounded-md bg-secondary-150 py-4'>
                  <i className='fa fa-envelope mx-8 text-2xl text-secondary-700 max-md:mx-4'></i>
                  <div className='mr-4'>
                    <a
                      href='mailto:contact@vila-diana.com'
                      className='flex gap-2.5'
                    >
                      <p className='font-semibold'>contact@vila-diana.com</p>
                    </a>
                  </div>
                </div>
                <div className='flex items-center rounded-md bg-secondary-150 py-4'>
                  <i className='fa fa-map-location-dot mx-8 text-2xl text-secondary-700 max-md:mx-4'></i>
                  <div className='mr-4'>
                    <a
                      href='https://maps.app.goo.gl/CXy3tXMbykakoWY97'
                      className='flex gap-2.5'
                    >
                      <p className='font-semibold'>
                        Strada Poiana Ruia 3, Brașov 500001, Romania
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 pl-7 max-md:mt-4 max-md:w-full max-md:px-0'>
              <iframe
                width='100%'
                height='300'
                src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Vila%20Diana%20-%20Poiana%20Bra%C8%99ov+(Vila%20Diana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
