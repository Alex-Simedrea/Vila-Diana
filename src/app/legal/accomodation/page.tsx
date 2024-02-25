import { poppins } from '@/app/fonts';
import Footer from '@/components/Footer';

export default function Accomodation() {
  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='mb-20 flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Politici de cazare
        </h1>
        <p>Politici cazare:</p>
        <ul className='list-disc px-8'>
          <li>
            Orele de check-in sunt cuprinse in intervalul 14:00-18:00. In cazul
            in care turistul soseste mai tarziu de ora 18:00 este posibil
            check-in-ul dar este obligatorie informarea receptiei de sosirea
            tarzie, in caz contrar rezervarea poate fi anulata;
          </li>
          <li>
            La check-in este obligatorie prezentarea unui document de identitate
            conform normelor legale in vigoare;
          </li>
          <li>Ora de check-out este 11:00 a.m.;</li>
          <li>Orele de liniste sunt cuprinse in intervalul 22:00-8:30;</li>
          <li>Nu sunt permise animalele de companie;</li>
          <li>
            Nu sunt permise petrecerile cu exceptia cazului in care este
            inchiriata vila in intregime de grupul care organizeaza o petrecere.
          </li>
        </ul>
        <p>Politici cazare copii:</p>
        <ul className='list-disc px-8'>
          <li>
            Turistii sunt obligati sa certifice varsta copiilor printr-un act de
            identitate la check-in;
          </li>
          <li>
            Baby coat-urile se asigura gratuit in limita disponibilitatii, la
            receptie;
          </li>
          <li>
            Cazarea copiilor de pana la 3 ani este gratuita daca nu se solicita
            desfacerea canapelei/patului suplimentar;
          </li>
          <li>
            Pentru cazarea copiilor cu varsta cuprinsa intre 3 -17.99 ani se
            achita un tarif de 100 lei/zi/copil;
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
