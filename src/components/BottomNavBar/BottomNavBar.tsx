import {
  EventCalendarIcon,
  HomeIcon,
  ProfileIcon,
  PromotionIcon,
} from '@/assets/icons';
import { NavBar, StyledLink } from './BottomNavBar.styles';

export const BottomNavBar = (props: { currentPage?: string }) => {
  const { currentPage } = props;

  return (
    <NavBar>
      <StyledLink
        href="/"
        className={(currentPage === 'home' && 'ativo') || undefined}
      >
        <HomeIcon size="medium" />
        <p>Home</p>
      </StyledLink>
      <StyledLink
        href="/events"
        className={(currentPage === 'events' && 'ativo') || undefined}
      >
        <EventCalendarIcon size="medium" />
        <p>Eventos</p>
      </StyledLink>
      <StyledLink
        href="/"
        className={(currentPage === 'promotions' && 'ativo') || undefined}
      >
        <PromotionIcon size="medium" />
        <p> Promoções</p>
      </StyledLink>
      <StyledLink
        href="/login"
        className={(currentPage === 'profile' && 'ativo') || undefined}
      >
        <ProfileIcon size="medium" />
        <p>Perfil</p>
      </StyledLink>
    </NavBar>
  );
};
