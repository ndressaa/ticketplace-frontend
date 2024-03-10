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
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TicketsDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: var(--color-text);
  font-weight: 600;
`;

export const Button = styled.button`
  width: 100%;
  height: 55px;
  background-color: var(--color-button);
  border: none;
  border-radius: 12px;
  color: var(--color-text-secondary);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;
