import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export default function AppNavbar() {
  return (
    <Navbar maxWidth={'full'} className='z-50'>
      <NavbarContent justify='start'>
        <NavbarMenuToggle className='sm:hidden' />
        <Link href='/'>
          <NavbarBrand>
            <Image
              src={'/logo-landscape-stars.png'}
              alt={'ceva'}
              width={150}
              height={100}
              className='h-auto w-auto'
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/about'>
            Despre noi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={'font-semibold'}
            href='/gallery'
            color={'foreground'}
          >
            Galerie
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/accommodation'>
            Cazare
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='#'>
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/contact'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            className={'bg-secondary-150 px-8 font-semibold'}
            href='https://vila-diana-9.pynbooking.direct'
            target='_blank'
            variant='flat'
            radius={'full'}
            size={'md'}
          >
            Rezerva acum
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' href='/about' size='lg'>
            Despre noi
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/gallery' size='lg'>
            Galerie
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/accommodation' size='lg'>
            Cazare
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='#' size='lg'>
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/contact' size='lg'>
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
