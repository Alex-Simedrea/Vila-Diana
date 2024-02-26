'use client';

import { Button } from '@nextui-org/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function CookieConsent({
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    localStorage.setItem('cookieConsent', 'true');
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (localStorage.getItem('cookieConsent') === 'true') {
        setIsOpen(false);
        setTimeout(() => {
          setHide(true);
        }, 700);
      }
    } catch (e) {
      console.log('Error: ', e);
    }
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 right-0 z-[200] w-full transition-transform duration-700 max-sm:left-0 sm:bottom-4 sm:right-4 sm:max-w-md',
        !isOpen
          ? 'translate-y-8 opacity-0 transition-[opacity,transform]'
          : 'translate-y-0 opacity-100 transition-[opacity,transform]',
        hide && 'hidden',
      )}
    >
      <div className='m-2 rounded-md bg-white'>
        <div className='grid gap-2'>
          <div className='flex items-center justify-center gap-4 p-4'>
            <i className='fa fa-cookie-bite text-2xl' />
            <p className='text-sm'>
              Acest website utilizeaza cookie-uri in scopurile mentionate in{' '}
              <a href='/legal/gdpr' className='text-secondary-700 underline'>
                Politica de confidentialitate
              </a>{' '}
              si{' '}
              <a
                className='text-secondary-700 underline'
                href='/legal/terms-and-conditions'
              >
                Termenii si Conditii
              </a>
              .
            </p>
          </div>
          <div className='bg-background/20 p-2 '>
            <Button
              onClick={accept}
              className='w-full bg-secondary-150 text-black'
              radius='full'
            >
              De acord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
