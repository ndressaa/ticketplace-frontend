'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header, OfferModal } from '@/components';
import { Screen } from '@/interfaces';
import { addToCart, getEventById, getTicketsByEventId } from '@/services';
import useStore from '@/store';
import { formatDate } from '@/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Button,
  Container,
  Content,
  Description,
  Info,
  Price,
  Title,
} from './styles';

export default function Page({ params }: { params: { eventId: string } }) {
  const { eventId } = params;

  const searchParams = useSearchParams();
  const action = searchParams?.get('action');
  const discount = searchParams?.get('discount');

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<any>(null);
  const [eventTicket, setEventTicket] = useState<any>(null);
  const [displayOfferModal, setDisplayOfferModal] = useState(false);
  const { isLoggedIn, userId, authToken, setCurrentPage } = useStore();

  if (!loading && !isLoggedIn) {
    return (
      <>
        <Header />
        <p style={{ paddingTop: '65px' }}>
          Faça login para visualizar o evento
        </p>
      </>
    );
  }

  useEffect(() => {
    if (authToken) {
      getEventById(eventId, authToken).then((data) => setEvent(data[0]));
      getTicketsByEventId(eventId, authToken).then((data) =>
        setEventTicket(data[0])
      );
    }
  }, [authToken]);

  useEffect(() => {
    event && eventTicket && setLoading(false);
    setCurrentPage(Screen.EVENTS);
  }, [event, eventTicket]);

  async function onClickHandler() {
    const addedToCart = await addToCart(
      userId,
      eventTicket.id,
      eventTicket.tipo,
      authToken
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <Title>{event.titulo}</Title>

          <img
            src={`data:image/jpeg;base64, ${event.capa}`}
            alt="Show"
            width={340}
            height={165}
          />

          <Info>
            <p>
              <b>Data</b>
              {formatDate(event.data).split(' - ')[0]}
            </p>

            <p>
              <b>Horário</b>
              {formatDate(event.data).split(' - ')[1]}
            </p>

            <p>
              <b>Local</b>
              São Paulo
            </p>

            <p>
              <b>Endereço</b>
              Rua das Rosas, 123 - Vila Florido, São Paulo - SP
            </p>

            <Price>
              <b>Valor</b>
              <span className={discount ? 'strikethrough' : undefined}>
                R$ {eventTicket.valor}
              </span>
              {discount && `R$ ${discount}`}
            </Price>
          </Info>

          <Description>{event.descricao}</Description>

          {(action === 'buy' || action === null) && (
            <Button onClick={onClickHandler}>Adicionar ao carrinho</Button>
          )}

          {action === 'swap' && (
            <Button onClick={() => setDisplayOfferModal(true)}>
              Oferecer ingresso para troca
            </Button>
          )}

          {displayOfferModal && (
            <OfferModal
              eventName={event.titulo}
              onClose={() => setDisplayOfferModal(false)}
            />
          )}
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
