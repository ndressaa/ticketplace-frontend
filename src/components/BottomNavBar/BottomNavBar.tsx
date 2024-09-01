'use client';

import useStore from '@/store';
import { navBarLinks } from '@/utils';
import { NavBar, StyledLink } from './BottomNavBar.styles';

export const BottomNavBar = () => {
  const { isLoggedIn, userType, currentPage } = useStore();

  const links = navBarLinks(isLoggedIn, userType);

  return (
    <NavBar>
      {links.map((item, index) => (
        <StyledLink
          href={item.url}
          className={(currentPage === item.page && 'ativo') || undefined}
        >
          {item.icon()}
          <p>{item.title}</p>
        </StyledLink>
      ))}
    </NavBar>
  );
};
