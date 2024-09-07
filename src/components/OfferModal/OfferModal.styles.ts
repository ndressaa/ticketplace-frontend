'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: rgba(38, 2, 89, 0.53);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerDiv = styled.div`
  background: #dedcfb;
  width: 340px;
  height: 602px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  p {
    max-width: 288px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  select {
    display: flex;
    padding: 18px;
    width: 274px;
    border: 1px solid #260259;
    border-radius: 12px;
    font-size: 16px;
  }

  select,
  option {
    background: #dedcfb;
    color: #260259;
  }

  button {
    height: 55px;
    width: 289px;
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
  }
`;
