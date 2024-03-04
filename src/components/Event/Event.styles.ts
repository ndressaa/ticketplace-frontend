'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 12px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 0;
  color: var(--color-text);

  h4 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    font-weight: 500;
  }
`;
