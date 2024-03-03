'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h2`
  color: var(--color-text);
  font-size: 20px;
  font-weight: 600;
`;

export const Events = styled.div`
  display: flex;
  gap: 25px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #382385;
    border-radius: 15px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  img {
    border-radius: 12px;
  }
`;
