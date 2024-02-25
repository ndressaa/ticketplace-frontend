import { CartIcon, LocationIcon } from '@/assets/icons';
import { Logo, SmallLogo } from '@/assets/img';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Location } from './Header.styles';

export const Header = (props: { isLoginOrSignup: boolean }) => {
  const { isLoginOrSignup } = props;

  return isLoginOrSignup ? (
    <Container>
      <Link href="./">
        <Image src={Logo} alt="Logo Ticketplace" />
      </Link>
    </Container>
  ) : (
    <Container>
      <Image src={SmallLogo} alt="Logo Ticketplace" />
      <Location>
        <LocationIcon size="small" />
        <p>São Paulo</p>
      </Location>
      <Link href="./cart">
        <CartIcon />
      </Link>
    </Container>
  );
};
