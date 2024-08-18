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
  padding-top: 40px;
  gap: 25px;

  img {
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-text);

  p {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  b {
    display: inline-block;
    width: 100px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--color-text-link);
`;

export const Button = styled.button`
  height: 55px;
  background-color: var(--color-button);
  border: none;
  border-radius: 12px;
  color: var(--color-text-secondary);
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;
`;
