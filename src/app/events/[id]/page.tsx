'use client';

import { addToCart, getEventById, getTicketsByEventId } from '@/api';
import { BottomNavBar, Header } from '@/components';
import { useAppContext } from '@/context';
import { formatDate } from '@/utils';
import toast from 'react-hot-toast';
import { Button, Container, Content, Description, Info, Title } from './styles';

export default async function Page({ params }: { params: { id: string } }) {
  const { globalState } = useAppContext();

  const { id } = params;

  const event = await getEventById(id, globalState.auth_token);

  const { titulo, capa, data, descricao } = event[0];

  const imageSource = `data:image/jpeg;base64, ${capa}`;
  const date = formatDate(data).split(' - ')[0];
  const time = formatDate(data).split(' - ')[1];

  const eventTickets = await getTicketsByEventId(id, globalState.auth_token);
  const { valor, tipo } = eventTickets[0];
  const ticketId = eventTickets[0].id;

  async function onClickHandler() {
    const addedToCart = await addToCart(
      {
        id_usuario: globalState.user_id,
        id_ingresso: ticketId,
        classe: tipo,
        desconto: 0,
      },
      globalState.auth_token
    );

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
