'use client';

import { styled } from 'styled-components';

export const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 1px solid var(--color-text-secondary);
  border-radius: 12px;
  padding: 8px;

  & > div {
    display: flex;
    gap: 12px;
    color: var(--color-text);

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
    }
  }

  img {
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
`;

export const RemoveTicket = styled.button`
  color: #da3131;
  background: none;
  padding: 6px;
  border: 1px solid #da3131;
  border-radius: 8px;
  line-height: 18px;
`;

export const TicketPrice = styled.p`
  font-size: 24px;
  text-align: right;
`;
