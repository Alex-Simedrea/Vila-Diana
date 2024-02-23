// app/providers.tsx
// 'use client';

import { NextUIProvider } from '@nextui-org/react';
import { PhotoProvider } from 'react-photo-view';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <NextUIProvider>
      {children}
      /*<PhotoProvider maskOpacity={0.7}>{children}</PhotoProvider>*/
    // </NextUIProvider>
  );
}
