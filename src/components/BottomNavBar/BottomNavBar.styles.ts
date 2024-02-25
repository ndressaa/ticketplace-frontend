'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export const NavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background-color: var(--color-primary);
  height: 80px;

  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 300;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    text-decoration: none;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 600;
  }
`;
