'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  background: #dedcfb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  img {
    display: flex;
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const Info = styled.div`
  font-weight: 600;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 600;
    color: #260259;
    text-decoration: line-through;
  }

  p:nth-of-type(2) {
    font-size: 24px;
    font-weight: 600;
    color: #4703a6;
  }
`;

export const Buttons = styled.div`
  flex-direction: column;
  gap: 15px;

  button {
    width: 100%;
    height: 55px;
    background-color: var(--color-button);
    border: none;
    border-radius: 12px;
    color: var(--color-text-secondary);
    font-size: 20px;
    font-weight: 600;
  }
`;
