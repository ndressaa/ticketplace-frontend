'use client';

import { Header } from '@/components';
import { Screen, UserType } from '@/interfaces';
import { login } from '@/services';
import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../loading';
import {
  Container,
  Content,
  Description,
  FormDiv,
  PasswordChange,
  StyledLink,
  Title,
} from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const {
    setIsLoggedIn,
    setUserType,
    setUserName,
    setUserId,
    setAuthToken,
    setCurrentPage,
  } = useStore();

  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);

    const email = form_values['login-email'];
    const password = form_values['login-password'];

    const handleLogin = await login(email, password).then((result) => result);

    if (handleLogin) {
      const { token, user } = handleLogin;
      setUserName(user.nome);
      setUserId(user.id);
      setAuthToken(token);

      setUserType(UserType.SHOPPER);
      setIsLoggedIn(true);

      toast('Login realizado com sucesso!', {
        duration: 4000,
        position: 'top-center',
        style: { backgroundColor: 'var(--color-light)' },
        icon: '✅',
      });
      router.push('/');
    }
  }, []);

  useEffect(() => {
    setLoading(false);
    setCurrentPage(Screen.LOGIN);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Content>
        <Container>
          <div>
            <Title>Acesse</Title>
            <Description>Digite seu e-mail e senha para entrar</Description>
          </div>
          <FormDiv>
            <form id="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                id="login-email"
                name="login-email"
                placeholder="E-mail"
              />
              <input
                type="password"
                id="login-password"
                name="login-password"
                placeholder="Senha"
              />
              <PasswordChange>Esqueci minha senha</PasswordChange>
              <button type="submit">Acessar</button>
            </form>
          </FormDiv>
          <StyledLink href="./signup">Cadastre-se</StyledLink>
        </Container>
      </Content>
    </>
  );
}
