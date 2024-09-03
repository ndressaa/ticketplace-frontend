import {
  CompanyIcon,
  CreateEventIcon,
  EventCalendarIcon,
  HomeIcon,
  PromotionIcon,
  TicketIcon,
  UserIcon,
} from '@/assets/icons';
import { Screen, UserType } from '@/interfaces';

type NavLink = {
  title: string;
  url: string;
  icon: () => JSX.Element | string;
  page?: Screen | string;
};

type Links = {
  default: NavLink[];
  buyer: NavLink[];
  seller: NavLink[];
};

const links: Links = {
  default: [
    {
      title: 'Home',
      url: '/',
      icon: () => <HomeIcon size="medium" />,
      page: Screen.HOME,
    },
    {
      title: 'Eventos',
      url: '/events',
      icon: () => <EventCalendarIcon size="medium" />,
      page: Screen.EVENTS,
    },
    {
      title: 'Promoções',
      url: '',
      icon: () => <PromotionIcon size="medium" />,
    },
    {
      title: 'Login',
      url: '/login',
      icon: () => <UserIcon size="medium" />,
      page: Screen.LOGIN,
    },
  ],
  buyer: [
    {
      title: 'Home',
      url: '/buyer/home',
      icon: () => <HomeIcon size="medium" />,
      page: Screen.HOME,
    },
    {
      title: 'Eventos',
      url: '/events',
      icon: () => <EventCalendarIcon size="medium" />,
      page: Screen.EVENTS,
    },
    {
      title: 'Ingressos',
      url: '/buyer/tickets',
      icon: () => <TicketIcon size="big" />,
      page: Screen.TICKETS,
    },
    {
      title: 'Perfil',
      url: '/buyer/profile',
      icon: () => <UserIcon size="medium" />,
      page: Screen.PROFILE,
    },
  ],
  seller: [
    {
      title: 'Home',
      url: '/seller/home',
      icon: () => <HomeIcon size="medium" />,
    },
    {
      title: 'Criar',
      url: '',
      icon: () => <CreateEventIcon size="medium" />,
    },
    {
      title: 'Meus Eventos',
      url: '',
      icon: () => <EventCalendarIcon size="medium" />,
    },
    {
      title: 'Perfil',
      url: '',
      icon: () => <CompanyIcon size="medium" />,
      page: Screen.PROFILE,
    },
  ],
};

export const navBarLinks = (isLoggedIn: boolean, userType: UserType) => {
  if (isLoggedIn && userType === UserType.BUYER) {
    return links['buyer'];
  }
  if (isLoggedIn && userType === UserType.SELLER) {
    return links['seller'];
  }

  return links['default'];
};
