import {
  getDownloadURL,
  getMetadata,
  getStorage,
  ref,
} from '@firebase/storage';
import app from '../../../../firebase';
import { notFound } from 'next/navigation';
import { FullMetadata } from '@firebase/storage-types';
import Footer from '@/components/Footer';
import '@/lib/fontawesome/css/fa.css';
import { Link } from '@nextui-org/react';

export default async function Page({ params }: { params: { id: string } }) {
  const storage = getStorage(app);
  const storageRef = ref(storage, `${params.id}.md`);

  let postContent = null;
  let metadata: FullMetadata;
  let imageUrl: string = '';
  let title: string = '';

  try {
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);
    postContent = await response.text();
    postContent = postContent.replace(/\n/g, '<br/>');

    metadata = await getMetadata(storageRef);

    if (metadata.customMetadata?.imageID) {
      const imageRef = ref(
        storage,
        `images/${metadata.customMetadata.imageID}.png`,
      );
      imageUrl = await getDownloadURL(imageRef);
    }

    title = metadata.customMetadata?.title || '';
  } catch (error) {
    return notFound();
  }

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='mb-20 flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <Link href='/blog'>
          <div className='mb-4 text-[1.25rem] font-medium'>
            <i className='fa fa-chevron-left mr-2'></i>
            <span className='font-bold'>Toate articolele</span>
          </div>
        </Link>
        <div className='pb-4'>
          <img
            className='h-[70vh] w-full rounded-[3rem] object-cover'
            src={imageUrl}
            alt={title}
          />
        </div>
        <label className='flex justify-center pb-6 text-[1.25rem] font-medium'>
          <span className='font-bold'>{title}</span>
        </label>
        <article className='py-12' dangerouslySetInnerHTML={{
          __html: postContent
        }}></article>
      </main>
      <Footer />
    </div>
  );
}
