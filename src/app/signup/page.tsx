'use client';

import { Header } from '@/components';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Container, Content, FormDiv, Title } from './styles';

export default async function Page() {
  const router = useRouter();
  const { globalState } = useAppContext();

  async function onSubmit(event: any) {
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);

    const nome = form_values['nome'];
    const email = form_values['email'];
    const senha = form_values['senha'];
    const cpf = form_values['cpf'];

    const url = '/api/signup';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
        cpf,
      }),
    };

    const response = await fetch(url, options);
    const signup = await response.json();

    if (signup) {
      const { token, user } = signup;
      globalState['user_id'] = user.id;
      globalState['auth_token'] = token;

      toast('Cadastro realizado com sucesso!', {
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
