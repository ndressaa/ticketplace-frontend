'use client';

import { signUp } from '@/api';
import { Header } from '@/components';
import { Container, Content, FormDiv, Title } from './styles';

export default async function Page() {
  async function onSubmit(event: any) {
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);

    const nome = form_values['nome'];
    const email = form_values['email'];
    const senha = form_values['senha'];
    const cpf = form_values['cpf'];

    const signup = await signUp({ nome, email, senha, cpf });

    if (signup) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = '/';
    }
  }

  return (
    <>
      <Header isLoginOrSignup />

      <Content>
        <Container>
          <Title>Cadastrar Usuário</Title>

          <FormDiv>
            <form id="signup-form" onSubmit={onSubmit}>
              <input type="text" id="nome" name="nome" placeholder="Nome" />
              <input type="text" id="cpf" name="cpf" placeholder="CPF" />
              <input type="text" id="email" name="email" placeholder="E-mail" />
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
              />
              <input
                type="password"
                // id="confirmar-senha"
                // name="confirmar-senha"
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
