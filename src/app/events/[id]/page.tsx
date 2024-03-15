'use client';

import { BottomNavBar, Header } from '@/components';
import { useAppContext } from '@/context';
import { formatDate } from '@/utils';
import toast from 'react-hot-toast';
import { Button, Container, Content, Description, Info, Title } from './styles';

export default async function Page({ params }: { params: { id: string } }) {
  const { globalState } = useAppContext();
  const { id } = params;

  const url = '/api/getEventById';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      token: globalState.auth_token,
    }),
  };

  const response = await fetch(url, options);
  const event = await response.json();

  const { titulo, capa, data, descricao } = event[0];

  const imageSource = `data:image/jpeg;base64, ${capa}`;
  const date = formatDate(data).split(' - ')[0];
  const time = formatDate(data).split(' - ')[1];

  const urlTickets = '/api/getTicketsByEventId';
  const optionsTickets = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      token: globalState.auth_token,
    }),
  };

  const responseTickets = await fetch(urlTickets, optionsTickets);
  const eventTickets = await responseTickets.json();

  const { valor, tipo } = eventTickets[0];
  const ticketId = eventTickets[0].id;

  async function onClickHandler() {
    const url = '/api/addToCart';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          id_usuario: globalState.user_id,
          id_ingresso: ticketId,
          classe: tipo,
          desconto: 0,
        },
        token: globalState.auth_token,
      }),
    };

    const response = await fetch(url, options);
    const addedToCart = await response.json();

    if (addedToCart) {
      toast('Ingresso adicionado ao carrinho com sucesso!', {
        duration: 4000,
        position: 'top-center',
        style: { backgroundColor: 'var(--color-light)' },
        icon: '✅',
      });
    }
  }

  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <Container>
          <Title>{titulo}</Title>

          <img src={imageSource} alt="Show" width={340} height={165} />

          <Info>
            <p>
              <b>Data</b>
              {date}
            </p>

            <p>
              <b>Horário</b>
              {time}
            </p>

            <p>
              <b>Local</b>
              São Paulo
            </p>

            <p>
              <b>Endereço</b>
              Rua das Rosas, 123 - Vila Florido, São Paulo - SP
            </p>

            <p>
              <b>Valor</b>
              R$ {valor}
            </p>
          </Info>

          <Description>{descricao}</Description>

          <Button onClick={onClickHandler}>Adicionar ao carrinho</Button>
        </Container>
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
