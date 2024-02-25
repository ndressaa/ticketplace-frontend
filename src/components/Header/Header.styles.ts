'use client';

import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 15px 25px;

  position: absolute;
  width: 100%;
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
