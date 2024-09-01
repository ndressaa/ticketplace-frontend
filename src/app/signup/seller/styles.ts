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
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin: 40px 0 25px 0;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  input {
    height: 43px;
    background-color: var(--color-light);
    border: none;
    border-radius: 12px;
    padding: 8px;
  }

  button {
    height: 55px;
    background-color: var(--color-button);
    border: none;
    border-radius: 12px;
    color: var(--color-text-secondary);
    font-size: 20px;
    font-weight: 500;
    margin-top: 12px;
  }
`;
