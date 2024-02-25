import Footer from '@/components/Footer';
import { poppins } from '@/app/fonts';

export default function About() {
  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Despre noi
        </h1>
        <div className='pb-10'>
          <img
            src='/about.jpg'
            alt='Photo of the villa'
            className='w-full rounded-large object-cover max-lg:mb-10 max-lg:aspect-video max-md:rounded-medium lg:float-right lg:mx-10 lg:w-2/5'
          />
          <p className='text-lg'>
            Vila Diana a intrat în circuitul turistic în vara lui 2003 și a fost
            renovată complet în anul 2021, fiind clasificată de Ministerul
            Turismului cu condiții de cazare de 4 stele.
          </p>
          <p className='text-lg py-8'>
            Amplasarea Vilei Diana este excelentă:
          </p>
            <ul className='list-disc pl-8 text-lg'>
              <li>
                la intrarea în staţiunea Poiana Braşov, într-o zonă retrasă,
                liniştită si pitorească
              </li>
              <li>la o distanţă de 250-300 m de centrul staţiunii</li>
              <li>
                la doar 10 minute de mers pe jos de Partia Bradul
              </li>
              <li>la o distanţă de 12 Km de municipiul Braşov</li>
            </ul>
          <p className='text-lg'>
            Descrierea Vilei Diana:
          </p>
            <ul className='list-disc pl-8 text-lg'>
              <li>structură arhitecturală pe trei niveluri</li>
              <li>
                8 camere duble și 3 apartamente
              </li>
              <li>
                camere spaţioase, luminoase, personalizate în culori diferite
              </li>
              <li>terase / balcoane generoase</li>
              <li>
                fiecare cameră are în dotare televizor Smart / LCD, seif,
                minifrigider, baie proprie cu uscător de păr, cadă,
              </li>
              <li>capacitate de pat suplimentar (maxim unul într-o cameră)</li>
              <li>
                sală pentru micul dejun, terasă, loc de joacă pentru copii
              </li>
              <li>depozit schiuri / cameră bagaje,</li>
              <li>
                parcare privată gratuită, Wi-Fi gratuit disponibil în toate
                zonele
              </li>
              <li>recepţie deschisă non-stop,fax, copiator</li>
            </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
