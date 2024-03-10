'use client';

import { addToCart, getEventById, getTicketsByEventId } from '@/api';
import { BottomNavBar, Header } from '@/components';
import { formatDate } from '@/utils';
import { Button, Container, Content, Description, Info, Title } from './styles';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const event = await getEventById(id);

  const { titulo, capa, data, descricao } = event[0];

  const imageSource = `data:image/jpeg;base64, ${capa}`;
  const date = formatDate(data).split(' - ')[0];
  const time = formatDate(data).split(' - ')[1];

  const eventTickets = await getTicketsByEventId(id);
  const { valor, tipo } = eventTickets[0];
  const ticketId = eventTickets[0].id;

  async function onClickHandler() {
    const addedToCart = await addToCart({
      id_usuario: '1',
      id_ingresso: ticketId,
      classe: tipo,
      desconto: 0,
    });

    if (addedToCart) {
      alert('Ingresso adicionado ao carrinho com sucesso');
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
