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

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Ticket = styled.div`
  padding: 15px 15px 15px 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #260259;
  background-color: #dedcfb;
  border-radius: 12px;
  height: 165px;
  position: relative;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  &::before {
    content: '';
    width: 2px;
    height: 165px;
    background: #260259;
    display: block;
    position: absolute;
    top: 0;
    left: 65px;
  }
`;

export const Badge = styled.div<{ color?: string }>`
  padding: 6px 6px 6px 24px;
  position: relative;
  border: 1px solid #260259;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: ${(props) => props.color || '#29E731'};
    position: absolute;
    border-radius: 50%;
    left: 8px;
  }
`;
