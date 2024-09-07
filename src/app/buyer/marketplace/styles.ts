'use client';

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
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
`;
