import Footer from '@/components/Footer';
import { poppins } from '@/app/fonts';
import RoomCard from '@/components/RoomCard';
import { getAccommodationImages } from '@/lib/getFiles';

export default async function Accommodation() {
  const [dubla1, dubla2, dubla3, dubla4, dubla5, apartament] =
    await Promise.all([
      getAccommodationImages('dubla1'),
      getAccommodationImages('dubla2'),
      getAccommodationImages('dubla3'),
      getAccommodationImages('dubla4'),
      getAccommodationImages('dubla5'),
      getAccommodationImages('apartament'),
    ]);

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Cazare
        </h1>
        <p className='text-lg w-2/3'>
          Menită să asigure o cazare plăcută, caldă, cu confortul atât de
          necesar unei vacanţe reuşite, Vila Diana a fost proiectată şi
          construită având în prim plan necesităţile şi dorinţele oaspeţilor
          săi. Cu o arhitectură clasică zonei montane, cu unghiuri ascuţite şi
          pante abrupte, pentru a preveni acumularea de zăpadă iarna, Vila Diana
          te va cuceri de la prima vedere. Iar acest lucru este o provocare
          plăcută pentru noi şi o continuă motivaţie. Atmosfera plăcută,
          curăţenia impecabilă, senzaţia familiară a așternuturilor de pat mereu
          proaspete şi îmbietoare, spaţiile generoase ale camerelor te vor face
          să simţi că ai găsit locul pe care ţi-l doreşti pentru a petrece
          nopţile unui sejur la munte.
        </p>
        <p className='text-lg pb-8'>
          Te aşteptăm cu drag să scriem împreună povestea unei vacanţe de vis!
        </p>
        <div className='flex flex-col gap-8 pb-10'>
          <RoomCard
            name='Apartament blue moon'
            description='Lorem ipsum dolor sit amet consectetur. Orci maecenas ut mauris massa blandit leo enim pellentesque pellentesque.'
            imagesSrc={apartament ? apartament : []}
            surface={55}
            people={2}
            bed='1 pat dublu'
            rooms={['203']}
          />
          <RoomCard
            name='Dubla'
            description=''
            imagesSrc={dubla1 ? dubla1 : []}
            surface={23}
            people={2}
            bed='1 pat dublu'
            rooms={['101', '201', '301']}
          />
          <RoomCard
            name='Dubla'
            description=''
            imagesSrc={dubla2 ? dubla2 : []}
            surface={23}
            people={2}
            bed='1 pat dublu'
            rooms={['102', '302']}
          />
          <RoomCard
            name='Dubla economy'
            description=''
            imagesSrc={dubla3 ? dubla3 : []}
            surface={23}
            people={2}
            bed='1 pat dublu'
            rooms={['103']}
          />
          <RoomCard
            name='Dubla'
            description=''
            imagesSrc={dubla4 ? dubla4 : []}
            surface={23}
            people={2}
            bed='1 pat dublu'
            rooms={['303']}
          />
          <RoomCard
            name='Dubla'
            description=''
            imagesSrc={dubla5 ? dubla5 : []}
            surface={23}
            people={2}
            bed='1 pat dublu'
            rooms={['304']}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
