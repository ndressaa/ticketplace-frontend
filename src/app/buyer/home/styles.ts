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
  gap: 25px;
`;

export const Button = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  color: #260259;
  font-size: 20px;
  font-weight: 600;
  background: none;
  border: 1px solid #260259;
  border-radius: 12px;
  margin-bottom: 30px;
`;
