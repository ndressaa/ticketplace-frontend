'use client';

import { Header } from '@/components';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  Container,
  Content,
  Description,
  FormDiv,
  PasswordChange,
  StyledLink,
  Title,
} from './styles';

export default async function Page() {
  const { globalState } = useAppContext();
  const router = useRouter();

  async function onSubmit(event: any) {
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);

    const email = form_values['login-email'];
    const password = form_values['login-password'];

    const url = '/api/login';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    const response = await fetch(url, options);
    const login = await response.json();

    if (login) {
      const { token, user } = login;
      globalState['user_id'] = user.id;
      globalState['auth_token'] = token;

      toast('Login realizado com sucesso!', {
        duration: 4000,
        position: 'top-center',
        style: { backgroundColor: 'var(--color-light)' },
        icon: '✅',
      });
      router.push('/');
    }
  }

  return (
    <>
      <Header isLoginOrSignup />
      <Content>
        <Container>
          <div>
            <Title>Acesse</Title>
            <Description>Digite seu e-mail e senha para entrar</Description>
          </div>
          <FormDiv>
            <form id="login-form" onSubmit={onSubmit}>
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
