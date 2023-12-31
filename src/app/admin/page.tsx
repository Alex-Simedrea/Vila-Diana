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
        title: 'title test',
        imageID: `${imageNames?.length}`
      }
    }
    await uploadString(newRef, 'hello world', 'raw', textMetadata).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

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
        <input type="file" id="img" name="img" accept="image/*" onChange={handleFileChange} />
        <button type="submit">upload</button>
      </form>
    </div>
  );
}
