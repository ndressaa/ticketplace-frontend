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
  justify-content: space-between;
  gap: 25px;
`;

export const UserInfo = styled.div`
  padding: 8px;
  & > div {
    display: flex;
    gap: 14px;
  }

  h1,
  p {
    color: #260259;
    font-weight: 600;
  }

  h1 {
    margin-top: 10px;
    font-size: 24px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }

  button {
    margin-top: 20px;
    height: 45px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
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

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedcfb;
  border-radius: 50%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 60px;

  button {
    width: 100%;
    height: 55px;
    background-color: var(--color-button);
    border: none;
    border-radius: 12px;
    color: var(--color-text-secondary);
    font-size: 20px;
    font-weight: 500;
  }
`;
