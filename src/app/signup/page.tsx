'use client';

import { Header } from '@/components';
import { Container, Content, FormDiv, Title } from './styles';

export default async function Page() {
  async function onSubmit(event: any) {
    event.preventDefault();

    // request para fazer cadastro
  }

  return (
    <>
      <Header isLoginOrSignup />

      <Content>
        <Container>
          <Title>Cadastrar Usuário</Title>

          <FormDiv>
            <form id="signup-form" onSubmit={onSubmit}>
              <input
                type="text"
                id="signup-name"
                name="signup-name"
                placeholder="Nome"
              />
              <input
                type="text"
                id="signup-cpf"
                name="signup-cpf"
                placeholder="CPF"
              />
              <input
                type="text"
                id="signup-email"
                name="signup-email"
                placeholder="E-mail"
              />
              <input
                type="password"
                id="signup-password"
                name="signup-password"
                placeholder="Senha"
              />
              <input
                type="password"
                id="signup-confirm-password"
                name="signup-confirm-password"
                placeholder="Confirmar Senha"
              />
              <button type="submit">Cadastrar</button>
            </form>
          </FormDiv>
        </Container>
      </Content>
    </>
  );
}
