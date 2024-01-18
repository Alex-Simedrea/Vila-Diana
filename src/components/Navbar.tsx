import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function AppNavbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Despre noi', 'Galerie', 'Cazare', 'Blog', 'Contact'];

  return (
    <Navbar maxWidth={'full'} className='z-50'>
      <NavbarContent justify='start'>
        <NavbarMenuToggle
          // aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <Link href='/'>
          <NavbarBrand>
            <Image
              src={'/logo-landscape-stars.png'}
              alt={'ceva'}
              width={150}
              height={100}
              className='w-auto h-auto'
            />
          </NavbarBrand>
          </Link>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='#'>
            Despre noi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} href='#' color={'foreground'}>
            Galerie
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='#'>
            Cazare
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='#'>
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='#'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            className={'bg-secondary-150 font-semibold px-8'}
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full' href='#' size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
);
}
