import {
  EventCalendarIcon,
  HomeIcon,
  ProfileIcon,
  PromotionIcon,
} from '@/assets/icons';
import { NavBar, StyledLink } from './BottomNavBar.styles';

export const BottomNavBar = () => {
  return (
    <NavBar>
      <StyledLink href="./">
        <HomeIcon size="medium" />
        <p>Home</p>
      </StyledLink>
      <StyledLink href="./events">
        <EventCalendarIcon size="medium" />
        <p>Eventos</p>
      </StyledLink>
      <StyledLink href="./">
        <PromotionIcon size="medium" />
        <p> Promoções</p>
      </StyledLink>
      <StyledLink href="./login">
        <ProfileIcon size="medium" />
        <p>Perfil</p>
      </StyledLink>
    </NavBar>
  );
};
