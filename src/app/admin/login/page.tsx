'use client';

import React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../../../firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required().email().max(100),
    password: yup.string().required().max(100),
  })
  .required();

interface IFormValues {
  email: string;
  password: string;
}

export default function Page() {
  const auth = getAuth(app);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        router.push('/admin');
        console.log(userCredential);
      })
      .catch((err) => {
        alert('Email or password incorrect!');
        console.log(JSON.stringify(err));
      });
  };

  // const current
  auth.onAuthStateChanged((user) => {
    console.log(user);
  });
  const router = useRouter();

  return (
    <div>
      <section className="bg-colors-background-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <Image
            src={'/logo-landscape.png'}
            alt={'logo'}
            width={300}
            height={100}
          />
          <div className="bg-secondary-100 border-primary-900 w-full space-y-4 rounded-md border p-6 sm:max-w-md sm:p-8 md:mt-0 md:space-y-6">
            <h1 className="text-text-950 text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Login admin
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="email"
                  id="email"
                  className="focus:ring-primary-500 border-primary-900 bg-background-50 w-full rounded-full border p-3 text-gray-900 sm:text-sm"
                  placeholder="Email"
                  {...register('email')}
                />
                {errors.email ? (
                  <p className="ml-2 text-red-700">Email is not valid</p>
                ) : null}
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="focus:ring-primary-500 border-primary-900 bg-background-50 w-full rounded-full border p-3 text-gray-900 sm:text-sm"
                  placeholder="Password"
                  {...register('password')}
                />
                {errors.password ? (
                  <p className="ml-2 text-red-700">Password is not valid</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-primary-900 hover:bg-primary-700 focus:ring-primary-300 w-full rounded-full px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
      <button
        onClick={async () => {
          const auth = getAuth(app);
          await signInWithEmailAndPassword(
            auth,
            'contact@vila-diana.com',
            'D3rj98s7VLPN',
          ).then((userCredential) => {
            console.log(userCredential);
          });
          router.push('/admin');
        }}
      >
        sign in
      </button>
      <button
        onClick={() => {
          const auth = getAuth(app);
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              console.log('signed out');
            })
            .catch((error) => {
              // An error happened.
              console.log(error);
            });
        }}
      >
        sign out
      </button>
    </div>
  );
}
