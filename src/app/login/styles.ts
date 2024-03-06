'use client';

import Link from 'next/link';
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
  gap: 25px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 30px;
`;

export const Description = styled.p`
  color: var(--color-text);
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
  }
`;

export const PasswordChange = styled.p`
  font-size: 13px;
  color: #073cf6;
  font-weight: 400;
  margin-top: 13px;
`;

export const StyledLink = styled(Link)`
  margin: 0 auto;
  color: #4703a6;
  text-decoration: underline;
  font-weight: 600;
  padding-bottom: 30px;

  &:visited {
    color: #4703a6;
  }
`;
