import { CartIcon, LocationIcon } from '@/assets/icons';
import { Logo, SmallLogo } from '@/assets/img';
import Image from 'next/image';
import Link from 'next/link';
import { Location, StyledHeader } from './Header.styles';

export const Header = (props: { isLoginOrSignup: boolean }) => {
  const { isLoginOrSignup } = props;

  return isLoginOrSignup ? (
    <StyledHeader>
      <Link href="./">
        <Image src={Logo} alt="Logo Ticketplace" />
      </Link>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <Image src={SmallLogo} alt="Logo Ticketplace" />
      <Location>
        <LocationIcon size="small" />
        <p>São Paulo</p>
      </Location>
      <Link href="./cart">
        <CartIcon />
      </Link>
    </StyledHeader>
  );
};
