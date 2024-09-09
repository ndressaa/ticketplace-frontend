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
`;

export const Total = styled.div`
  font-weight: 600;

  p {
    font-size: 22px;
  }

  span {
    font-size: 24px;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 105px;
    border: 1px solid var(--color-text);
    border-radius: 12px;
    background-color: var(--color-light);

    &:nth-of-type(2) {
      background-color: #b186ee;
    }
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    width: 100%;
    height: 43px;
    background-color: var(--color-light);
    border: none;
    border-radius: 12px;
    padding: 8px;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: inherit;

    & > div {
      display: inherit;
      flex-direction: column;
      gap: inherit;

      input {
        height: 30px;
        width: 65px;
      }
    }
  }
`;

export const Button = styled.button`
  height: 100%;
  min-height: 55px;
  background-color: var(--color-button);
  border: none;
  border-radius: 12px;
  color: var(--color-text-secondary);
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;
`;
