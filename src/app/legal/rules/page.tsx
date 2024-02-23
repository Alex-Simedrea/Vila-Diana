import { poppins } from '@/app/fonts';
import Footer from '@/components/Footer';

export default function Rules() {
  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='mb-20 flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Regulament ordine interioara si spatii de uz comun
        </h1>
        <p>
          <strong>In aceasta vila va rugam sa</strong>:
        </p>
        <p>
          <br />
          &bull;&nbsp;{' '}
          <strong>NU FUMATI IN CAMERE SI IN SPATIILE INCHISE;</strong>
          <br />
          &bull;&nbsp;{' '}
          <strong>
            NU LASATI COPIII NESUPRAVEGHEATI. ORICE ACCIDENT PRODUS CA URMARE
            FOLOSIRII NEADECVATE/ EXCESIVE A DOTARILOR VILEI NU ESTE
            RESPONSABILITATEA NOASTRA. ORICE ACCIDENT PRODUS CA URMARE A
            NESUPRAVEGHERII COPIIILOR NU ESTE RESPONSABILITATEA NOASTRA;
          </strong>
          <br />
          &bull; Pastrati linistea intre <strong>orele 22:00 si 08:30</strong>,
          acest interval fiind considerat perioada de odihna si liniste.
          Deoarece confortul fiecarui turist este important pentru noi, va rugam
          sa respectati orele de odihna. Daca, din motive obiective, sositi in
          Vila dupa ora <strong>22:00, va rugam sa pastrati linistea</strong>;
          <br />
          &bull; NU tulburati linistea celor din jur si nu-i deranjati pe
          ceilalti turisti;
          <br />
          &bull; NU aruncati mucurile de tigari in alt loc decat in scrumiere,
          dupa stingerea lor in prealabil;
          <br />
          &bull; Consumati moderat bauturi alcoolice si evitati prezenta in
          spatiile publice in stare avansata de ebrietate;
          <br />
          &bull; NU organizati petreceri in camere. Nu se accepta muzica la
          volum ridicat. Exceptie fac grupurile care ocupa intreaga locatie.
          <br />
          &bull; Anuntati cat mai repede posibil orice defectiune a aparatelor
          sau instalatiilor din dotare;
          <br />
          &bull; NU preparati mancare si nu o consumati in camera;
          <br />
          &bull; NU deteriorati obiectele din dotarea Vilei, in caz contrar,
          turistilor le va fi imputata suma egala cu valoarea obiectului
          deteriorat si manopera;
          <br />
          &bull; NU folositi consumatori electrici de mare putere, resouri,
          radiatoare, fierbatoare in camere si in spatiile Vilei.
          <br />
          &bull; Informati receptia in cazul producerii unor prejudicii
          inventarului din camera;
          <br />
          &bull; NU aduceti animale de companie in locatie;
          <br />
          &bull; NU introduceti in Vila armament, arme albe sau substante
          lacrimogene;
        </p>
        <p>&nbsp;</p>
        <p>
          <br />
          <strong>
            Vila este prevazuta cu camere de supraveghere interioare si
            exterioare, orientate catre punctele principale de acces in
            cladire.Client/turist este orice persoana cazata sau care
            beneficiaza de orice serviciu al Vilei.Pentru o sedere placuta si
            pentru a ne putea duce la indeplinire indatoririle noastre de gazde,
            rugam turistii sa respecte cerintele mentionate mai sus. Cerintele
            se considera acceptate si asumate de turist la momentul achitarii
            avansului/ platii sederii/check-in-ului. Ne rezervam, dreptul
            interzicerii accesului in incinta Vilei in cazul nerespectarii uneia
            sau mai multor cerinte, mentionate mai sus, si dreptul de a actiona
            conform legii pentru incalcarea proprietatii private.
          </strong>
          <br />
          <br />
          <strong>
            Va multumim pentru intelegere si va dorim un sejur cat mai placut si
            relaxant!﻿
          </strong>
        </p>
      </main>
      <Footer />
    </div>
  );
}
