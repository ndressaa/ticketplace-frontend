import { CartIcon, LocationIcon } from '@/assets/icons';
import { Logo, SmallLogo } from '@/assets/img';
import Image from 'next/image';
import Link from 'next/link';
import { Location, StyledHeader } from './Header.styles';

export const Header = (props: {
  isLoginOrSignup: boolean;
  currentPage?: string;
}) => {
  const { isLoginOrSignup, currentPage } = props;

  return isLoginOrSignup ? (
    <StyledHeader>
      <Link href="/">
        <Image src={Logo} alt="Logo Ticketplace" />
      </Link>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <Link href="/">
        <Image src={SmallLogo} alt="Logo Ticketplace" />
      </Link>
      <Location>
        <LocationIcon size="small" />
        <p>São Paulo</p>
      </Location>
      <Link
        href="/cart"
        className={(currentPage === 'cart/checkout' && 'ativo') || undefined}
      >
        <CartIcon />
      </Link>
    </StyledHeader>
  );
};
