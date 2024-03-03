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

export const CategoriesDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const IconDiv = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-light);
`;
