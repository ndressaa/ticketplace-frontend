'use client';

import { styled } from 'styled-components';

export const SearchBar = styled.div`
  background: gray;
  width: 100%;
  height: 42px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 21px;
  background-color: #6f04d9;
  padding: 10px;

  input {
    background: none;
    border: none;
    color: var(--color-light);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    padding-left: 8px;
    outline: none;
  }

  input::placeholder {
    color: var(--color-light);
  }
`;
