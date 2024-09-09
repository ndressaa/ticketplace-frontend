'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header, SellModal, SwapModal } from '@/components';
import { Screen } from '@/interfaces';
import { getEventById } from '@/services';
import useStore from '@/store';
import { badgeColor, badgeText, formatDate } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  ButtonsContainer,
  Container,
  Content,
  Ticket,
  Title,
} from './styles';

export default function Page({ params }: { params: { eventId: string } }) {
  const { eventId } = params;

  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<any>(null);
  const [displaySellModal, setDisplaySellModal] = useState(false);
  const [displaySwapModal, setDisplaySwapModal] = useState(false);
  const { userId, authToken, setCurrentPage } = useStore();

  // const handleSell = () => {}

  useEffect(() => {
    if (userId && authToken) {
      getEventById(eventId, authToken).then((data) => {
        if (Object.keys(data).includes('error')) {
          setTicket([]);
        } else {
          setTicket(data[0]);
        }
      });
    } else {
      setTicket([]);
    }
  }, [userId, authToken]);

  useEffect(() => {
    ticket && setLoading(false);
    setCurrentPage(Screen.TICKETS);
  }, [ticket]);

  if (loading) {
    return <Loading />;
  }

  const { titulo, data, id, endereco } = ticket;
  const address = `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`;

  return (
    <>
      <Header />

      <Content>
        <Container>
          <Title>{titulo}</Title>
          <Ticket>
            <h3>{titulo}</h3>
            <p>{formatDate(data)}</p>
            <p>{address}</p>
            <Badge color={badgeColor('owned')}>{badgeText('owned')}</Badge>
          </Ticket>

          <ButtonsContainer>
            <Link href="">
              <Button>Detalhes</Button>
            </Link>

            <Button onClick={() => setDisplaySellModal(true)}>Vender</Button>

            <Button onClick={() => setDisplaySwapModal(true)}>Trocar</Button>

            <Link href="/buyer/tickets/generated/1">
              <Button>Gerar</Button>
            </Link>
          </ButtonsContainer>

          {displaySellModal && (
            <SellModal
              id={id}
              eventName={titulo}
              onClose={() => setDisplaySellModal(false)}
            />
          )}

          {displaySwapModal && (
            <SwapModal
              id={id}
              eventName={titulo}
              onClose={() => setDisplaySwapModal(false)}
            />
          )}
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
