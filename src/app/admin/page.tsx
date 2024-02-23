'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import app from '../../../firebase';
import { getAuth, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadBytes,
  uploadString,
} from '@firebase/storage';
import { poppins } from '@/app/fonts';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sollicitudin purus, vitae sagittis diam. Maecenas a eros urna. Phasellus lobortis pretium lectus, condimentum vestibulum dui. Cras lectus tellus, laoreet a pretium non, imperdiet et nunc. Donec in sagittis mauris, vitae ultrices dui. Sed quis feugiat felis, quis rutrum ipsum. Aliquam maximus, diam in sagittis maximus, velit massa vulputate neque, non eleifend est libero id augue. Aenean quis neque finibus, pretium diam vitae, auctor ex. Ut blandit ut nibh faucibus mattis.\n' +
  '\n' +
  'Sed ac velit venenatis, porttitor lectus id, fringilla tortor. Nunc hendrerit malesuada justo. Donec venenatis lacus leo, quis consectetur enim condimentum a. Duis ac sollicitudin elit. Phasellus felis lorem, cursus vitae orci eget, vulputate eleifend ante. Duis mollis faucibus libero at faucibus. Donec molestie odio urna, quis dictum enim eleifend non. Vestibulum posuere euismod leo nec congue. Vivamus finibus sem eu quam vestibulum volutpat. Aliquam viverra mi sit amet imperdiet auctor. Sed fringilla ullamcorper nulla in tristique. Quisque non molestie lorem, ut rhoncus tellus. Mauris ut tortor gravida, fermentum odio at, accumsan tortor. Fusce tristique mi erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis augue porta, bibendum tellus et, cursus est.\n' +
  '\n' +
  'Mauris commodo ultrices euismod. Aenean bibendum nec nibh in lobortis. Proin nec posuere massa, vitae ultrices felis. Morbi pretium a ex id ultricies. Nullam suscipit dolor risus, a sagittis nisl pellentesque ullamcorper. Integer egestas, purus sit amet ultricies scelerisque, neque urna pulvinar dolor, at mollis est neque sed velit. Vivamus quis quam tincidunt velit gravida efficitur. Donec commodo congue tortor sed vulputate. Donec sed lacinia sem.\n' +
  '\n' +
  'Morbi ac mauris consequat, mollis odio eu, varius eros. In id metus ex. Donec eget tristique diam. Aliquam gravida nisl purus, et dignissim purus fermentum sed. Aliquam lobortis lectus ipsum, eget condimentum mi viverra iaculis. Suspendisse id sem vitae ante ullamcorper fermentum. Maecenas nunc massa, mollis egestas est vitae, mattis congue nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at ligula aliquet, mollis libero vel, aliquet risus. Curabitur pretium sapien non nunc faucibus, ac fermentum dui ullamcorper. Suspendisse congue, tellus ut faucibus aliquam, nisl lorem luctus orci, at imperdiet augue purus molestie leo. Sed a libero feugiat, tempus ligula sit amet, eleifend est. Donec nec ultricies tellus. Suspendisse potenti. Pellentesque ullamcorper nec enim sit amet faucibus. Proin vehicula varius orci id congue.\n' +
  '\n' +
  'Nullam ac metus lorem. Pellentesque pellentesque consequat elementum. Curabitur convallis a massa eu ultrices. Vestibulum eget quam id metus viverra dapibus. Nam rhoncus finibus purus et facilisis. Sed semper massa eu accumsan congue. Sed turpis leo, condimentum sed ultricies eleifend, ultrices in quam. Maecenas porta suscipit libero eget varius. Donec vitae justo quis neque pulvinar viverra. Cras condimentum lorem est, sed vestibulum sapien accumsan eget. Ut quis velit posuere, facilisis lorem mattis, auctor sapien. Nulla pretium magna eu magna rhoncus aliquet. Nulla egestas volutpat viverra.';

export default function Page() {
  const firebaseAuth = getAuth(app);
  const router = useRouter();
  const storage = getStorage(app);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [postNames, setPostNames] = useState<any[]>();
  const [imageNames, setImageNames] = useState<any[]>();
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        router.replace('/admin/login');
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const storage = getStorage(app);
    const storageRef = ref(storage);

    listAll(storageRef)
      .then((res) => {
        const promises = res.items.map(async (item) => {
          const metadata = await getMetadata(item);
          return {
            name: item.name,
            metadata: metadata,
          };
        });

        Promise.all(promises).then((filesWithMetadata) => {
          setPostNames(filesWithMetadata);
        });
      })
      .catch((error) => {
        console.error('Error listing files', error);
      });

    const imagesRef = ref(storage, 'images');
    listAll(imagesRef)
      .then((res) => {
        const promises = res.items.map(async (item) => {
          const metadata = await getMetadata(item);
          return {
            name: item.name,
            metadata: metadata,
          };
        });

        Promise.all(promises).then((filesWithMetadata) => {
          setImageNames(filesWithMetadata);
        });
      })
      .catch((error) => {
        console.error('Error listing files', error);
      });
  }, []);

  if (loading || !user) {
    return <p>wait a bit</p>;
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }

    const newRef = ref(storage, `${postNames?.length}.md`);
    const textMetadata = {
      contentType: 'text/plain',
      customMetadata: {
        title: 'Vila Diana din Poiana Brasov',
        imageID: `${imageNames?.length}`,
      },
    };
    await uploadString(newRef, text, 'raw', textMetadata).then(
      (snapshot) => {
        console.log('Uploaded a blob or file!');
      },
    );

    const imagesRef = ref(storage, 'images');
    const newImageRef = ref(imagesRef, `${imageNames?.length}.png`);
    const metadata = {
      contentType: 'image/png',
    };
    await uploadBytes(newImageRef, file, metadata).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  };

  return (
    <>
      <h1 className={`ml-8 mt-5 text-5xl font-semibold ${poppins.className}`}>
        Admin
      </h1>
      <div>
        <p>admin page</p>
        <p>{JSON.stringify(postNames)}</p>
        <br />
        <p>{JSON.stringify(imageNames)}</p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await handleUploadClick();
          }}
        >
          <input
            type='file'
            id='img'
            name='img'
            accept='image/*'
            onChange={handleFileChange}
          />
          <button type='submit'>upload</button>
        </form>
      </div>
    </>
  );
}
