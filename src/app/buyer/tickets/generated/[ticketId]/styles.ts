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
  align-items: center;
  gap: 25px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
  width: 100%;
`;

export const Name = styled.h2`
  color: #260259;
  font-size: 20px;
  font-weight: 600;
`;

export const Ticket = styled.div`
  padding: 15px 15px 15px 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #260259;
  background-color: #dedcfb;
  border-radius: 12px;
  height: 125px;
  position: relative;
  width: 100%;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  &::before {
    content: '';
    width: 2px;
    height: 125px;
    background: #260259;
    display: block;
    position: absolute;
    top: 0;
    left: 65px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: var(--color-text-secondary);
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto', Arial, sans-serif !important;
  background-color: var(--color-button);
  border: none;
  border-radius: 18px;
`;
