import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
} from '@firebase/storage';
import app from '../../../firebase';
import { poppins } from '@/app/fonts';
import { Link } from '@nextui-org/react';

function formattedDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString('ro-RO');
}

export default async function Page() {
  const storage = getStorage(app);
  const storageRef = ref(storage);
  let files: any[] = [null];

  try {
    const res = await listAll(storageRef);
    const promises = res.items.map(async (item) => {
      const metadata = await getMetadata(item);
      let url: string = '';
      let title: string;
      let id = item.name.split('.')[0];

      if (metadata.customMetadata?.imageID) {
        const imageRef = ref(
          storage,
          `images/${metadata.customMetadata.imageID}.png`,
        );
        url = await getDownloadURL(imageRef);
      }
      title = metadata.customMetadata?.title || '';

      return {
        id: id,
        title: title,
        imageUrl: url,
        date: metadata.timeCreated,
      };
    });

    files = await Promise.all(promises);
  } catch (error) {
    console.error('Error listing files', error);
  }

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='mb-20 flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Blog
        </h1>
        <div className='grid md:grid-cols-2 gap-8'>
          {files.map((item) => {
            return (
              <Link key={item.id} href={`/blog/${item.id}`}>
                <div
                  key={item.id}
                  className='relative h-[25rem] w-full flex-col'
                >
                  <img
                    className='h-full w-full rounded-large object-cover'
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <label className='absolute bottom-0 left-0 right-0 flex h-1/2 flex-col justify-end gap-1 rounded-b-large bg-gradient-to-t from-black/70 to-transparent pb-6 pl-10 text-[1.25rem] font-medium text-white'>
                    <span className='font-bold'>{item.title}</span>
                    <span className='text-sm'>{formattedDate(item.date)}</span>
                  </label>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
