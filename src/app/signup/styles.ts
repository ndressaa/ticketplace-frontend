'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export const Content = styled.div`
  padding-top: 65px;
  display: flex;
  justify-content: center;
  height: 765px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 55px;
  background-color: var(--color-button);
  border: none;
  border-radius: 12px;
  color: var(--color-text-secondary);
  font-size: 20px;
  font-weight: 500;
`;
