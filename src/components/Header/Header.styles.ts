'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 15px 25px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & p {
    color: var(--color-white);
    font-size: 14px;
    font-weight: 500;
  }
`;
