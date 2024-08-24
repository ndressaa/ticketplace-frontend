'use client';

import { Header } from '@/components';
import { Screen, UserType } from '@/interfaces';
import { signUp } from '@/services';
import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../loading';
import { Container, Content, FormDiv, Title } from './styles';

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

    const nome = form_values['nome'];
    const email = form_values['email'];
    const senha = form_values['senha'];
    const cpf = form_values['cpf'];

    const handleSignUp = await signUp(nome, email, senha, cpf).then(
      (result) => result
    );

    if (handleSignUp) {
      const { token, user } = handleSignUp;
      setUserName(user.nome);
      setUserId(user.id);
      setAuthToken(token);

      setUserType(UserType.SHOPPER);
      setIsLoggedIn(true);

      toast('Cadastro realizado com sucesso!', {
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
          <Title>Cadastrar Usuário</Title>

          <FormDiv>
            <form id="signup-form" onSubmit={handleSubmit}>
              <input type="text" id="nome" name="nome" placeholder="Nome" />
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                maxLength={11}
              />
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
