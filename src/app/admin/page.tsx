'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import app from '../../../firebase';
import { getAuth, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import {
  deleteObject,
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadBytes,
  uploadString,
} from '@firebase/storage';
import { poppins } from '@/app/fonts';
import { Button } from '@nextui-org/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast, Toaster } from 'sonner';

function formattedDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString('ro-RO');
}

const schema = yup
  .object({
    title: yup.string().required(),
    body: yup.string().required(),
    file: yup.mixed(),
  })
  .required();

interface IFormValues {
  title: string;
  body: string;
  file?: any;
}

export default function Page() {
  const firebaseAuth = getAuth(app);
  const router = useRouter();
  const storage = getStorage(app);
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [postNames, setPostNames] = useState<any[]>();
  const [imageNames, setImageNames] = useState<any[]>();
  const [galleryPhotos, setGalleryPhotos] = useState<any[]>();
  const [file, setFile] = useState<File>();
  const [galleryFile, setGalleryFile] = useState<File>();
  const form = useForm<IFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

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

    const galleryPhotosRef = ref(storage, 'gallery');
    listAll(galleryPhotosRef)
      .then(async (res) => {
        const promises = res.items.map(async (item) => {
          const metadata = await getMetadata(item);
          const url = await getDownloadURL(item);
          return {
            name: item.name,
            metadata: metadata,
            src: url,
          };
        });

        Promise.all(promises).then((filesWithMetadata) => {
          setGalleryPhotos(filesWithMetadata);
        });
      })
      .catch((error) => {
        console.error('Error listing files', error);
      });
  }, []);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  const handlePostDeleteClick = async (post: any) => {
    // Delete the article
    const postRef = ref(storage, `${post.name}`);
    await deleteObject(postRef);

    // Delete the image
    const imageRef = ref(
      storage,
      `images/${post.metadata.customMetadata?.imageID}.png`,
    );
    await deleteObject(imageRef);
  };

  const handleGalleryDeleteClick = async (image: any) => {
    const imageRef = ref(storage, `gallery/${image.name}`);
    await deleteObject(imageRef);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    if (!file) {
      return;
    }

    console.log(!!postNames && postNames[postNames.length - 1]);

    const newRef = ref(
      storage,
      `${
        postNames
          ? String(
              Number(postNames[postNames.length - 1].name.split('.')[0]) + 1,
            )
          : ''
      }.md`,
    );
    const textMetadata = {
      contentType: 'text/plain',
      customMetadata: {
        title: data.title,
        imageID: `${imageNames?.length}`,
      },
    };
    await uploadString(newRef, data.body, 'raw', textMetadata).then(() => {
      console.log('Uploaded a blob or file!');
    });

    const imagesRef = ref(storage, 'images');
    const newImageRef = ref(
      imagesRef,
      `${
        imageNames
          ? String(
              Number(imageNames[imageNames.length - 1].name.split('.')[0]) + 1,
            )
          : ''
      }.png`,
    );
    const metadata = {
      contentType: 'image/png',
    };
    await uploadBytes(newImageRef, file, metadata).then(() => {
      console.log('Uploaded a blob or file!');
    });

    toast('Postarea a fost adăugată!', {
      action: {
        label: 'Refresh',
        onClick: () => {
          window.location.reload();
        },
      },
    });
  };

  const onGallerySubmit = async () => {
    if (!galleryFile) {
      return;
    }

    const imagesRef = ref(storage, 'gallery');
    const newImageRef = ref(imagesRef, `${galleryFile.name}.png`);
    const metadata = {
      contentType: 'image/png',
    };
    await uploadBytes(newImageRef, galleryFile, metadata).then(() => {
      console.log('Uploaded a blob or file!');
    });
  };

  return (
    <>
      <div className='flex'>
        <h1 className={`ml-8 mt-5 text-5xl font-semibold ${poppins.className}`}>
          Admin
        </h1>
        <Button
          className='ml-auto mr-8 mt-5'
          onClick={async () => {
            await firebaseAuth.signOut();
            router.replace('/admin/login');
          }}
        >
          Logout
        </Button>
      </div>
      <div className='px-8 pb-20'>
        <h2 className='mb-4 mt-8 text-4xl font-bold'>Blog</h2>
        <h2 className='mb-4 mt-8 text-2xl font-bold'>Postări</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Post ID</TableHead>
              <TableHead>Post Name</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {postNames?.map((post) => (
              <TableRow key={post.name}>
                <TableCell>{post.name.split('.')[0]}</TableCell>
                <TableCell>{post.metadata.customMetadata?.title}</TableCell>
                <TableCell>
                  {formattedDate(post.metadata.timeCreated)}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      handlePostDeleteClick(post).then(() => {
                        toast('Postarea a fost ștearsă!', {
                          action: {
                            label: 'Refresh',
                            onClick: () => {
                              window.location.reload();
                            },
                          },
                        });
                      })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2 className='mb-4 mt-32 text-2xl font-bold'>
          Creează o postare nouă
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Titlul postării</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Titlu' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
              name='title'
            />
            <FormField
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Conținutul postării</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder='Continut' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
              name='body'
            />
            <FormField
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Imaginea postării</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='file'
                        onChange={(event) => {
                          setFile(
                            event.target.files
                              ? event.target.files[0]
                              : undefined,
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
              name='file'
            />
            <Button type='submit' className='mt-3'>
              Upload
            </Button>
          </form>
        </Form>

        <h2 className='mb-4 mt-16 text-4xl font-bold'>Galerie</h2>
        <h2 className='mb-4 mt-8 text-2xl font-bold'>Imagini</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Image Name</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {galleryPhotos?.map((image) => (
              <TableRow key={image.name}>
                <TableCell>
                  <img
                    src={image.src}
                    alt={image.name}
                    className='h-20 w-20 object-cover'
                  />
                </TableCell>
                <TableCell>{image.name.split('.')[0]}</TableCell>
                <TableCell>
                  {formattedDate(image.metadata.timeCreated)}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      handleGalleryDeleteClick(image).then(() => {
                        toast('Imaginea a fost ștearsă!', {
                          action: {
                            label: 'Refresh',
                            onClick: () => {
                              window.location.reload();
                            },
                          },
                        });
                      })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2 className='mb-4 mt-32 text-2xl font-bold'>
          Încarcă o imagine nouă
        </h2>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await onGallerySubmit().then(() => {
              toast('Imaginea a fost adăugata!', {
                action: {
                  label: 'Refresh',
                  onClick: () => {
                    window.location.reload();
                  },
                },
              });
            });
          }}
        >
          <Input
            type='file'
            onChange={(event) => {
              setGalleryFile(
                event.target.files ? event.target.files[0] : undefined,
              );
            }}
          />
          <Button type='submit' className='mt-3'>
            Upload
          </Button>
        </form>
      </div>
      <Toaster />
    </>
  );
}
