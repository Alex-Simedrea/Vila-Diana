'use client';

import { Image as ImageType } from '@/lib/getFiles';
import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { poppins } from '@/app/fonts';
import Footer from '@/components/Footer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import getGalleryPhotos from '@/lib/getPhotosFromFirebase';

export default function GalleryPage() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    getGalleryPhotos().then((files) => {
      if (files) {
        setImages(files);
      }
    });
  }, []);

  return (
    <div className='flex min-h-[calc(100dvh-4rem)] flex-col'>
      <main className='flex-1 px-[16px] pt-6 md:px-10 md:pt-10'>
        <h1
          className={`text-5xl font-semibold ${poppins.className} pb-10 leading-tight max-md:text-3xl`}
        >
          Galerie
        </h1>
        <div className='mb-16 flex flex-wrap gap-2'>
          {images?.map((item, index) => {
            return (
              <img
                src={item.src}
                alt='poza'
                key={item.src}
                onClick={() => {
                  setIndex(index);
                }}
                className='h-[400px] w-[400px] cursor-pointer object-cover'
              />
            );
          })}
        </div>
        <Lightbox
          index={index}
          slides={images}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </main>
      <Footer />
    </div>
  );
}
