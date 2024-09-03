'use client';

import { CartIcon, LocationIcon } from '@/assets/icons';
import { Logo, SmallLogo } from '@/assets/img';
import { UserType } from '@/interfaces';
import useStore from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { Location, StyledHeader } from './Header.styles';

export const Header = () => {
  const { isLoggedIn, userType, currentPage } = useStore();

  if (isLoggedIn && userType === UserType.BUYER) {
    return (
      <StyledHeader>
        <Link href="/">
          <Image src={SmallLogo} alt="Logo Ticketplace" />
        </Link>
        <Location>
          <LocationIcon size="small" />
          <p>São Paulo</p>
        </Location>
        <Link
          href="/buyer/cart"
          className={
            ((currentPage === 'cart' || currentPage === 'checkout') &&
              'ativo') ||
            undefined
          }
        >
          <CartIcon />
        </Link>
      </StyledHeader>
    );
  }

  // TODO if(isLoggedIn && userType === UserType.SELLER)

  return (
    <StyledHeader>
      <Link href="/">
        <Image src={Logo} alt="Logo Ticketplace" />
      </Link>
    </StyledHeader>
  );
};
