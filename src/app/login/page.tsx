'use client';

import { getLogin } from '@/api';
import { Header } from '@/components';
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
  async function onSubmit(event: any) {
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);

    const email = form_values['login-email'];
    const password = form_values['login-password'];

    const login = await getLogin({ email, password });

    if (login) {
      alert('Login realizado com sucesso!');
      window.location.href = '/';
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
