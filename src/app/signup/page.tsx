'use client';

import { UserIcon } from '@/assets/icons';
import { Header } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import { Container, Content, StyledButton, StyledLink } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);

  const { setCurrentPage } = useStore();

  useEffect(() => {
    setLoading(false);
    setCurrentPage(Screen.SIGNUP);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Content>
        <Container>
          <h1>Escolha o tipo de cadastro</h1>

          <StyledLink href="/signup/buyer">
            <UserIcon size="77" color="#121212" />
            <StyledButton>Usuário</StyledButton>
          </StyledLink>

          <StyledLink href="/signup/seller">
            <UserIcon size="77" color="#121212" />
            <StyledButton>Empresa</StyledButton>
          </StyledLink>
        </Container>
      </Content>
    </>
  );
}
