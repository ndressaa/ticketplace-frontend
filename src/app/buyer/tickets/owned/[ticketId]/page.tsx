'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header, SellModal, SwapModal } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
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

export default function Page({ params }: { params: { ticketId: string } }) {
  const { ticketId } = params;

  const [loading, setLoading] = useState(true);
  const [displaySellModal, setDisplaySellModal] = useState(false);
  const [displaySwapModal, setDisplaySwapModal] = useState(false);
  const { setCurrentPage } = useStore();

  useEffect(() => {
    setLoading(false);
    setCurrentPage(Screen.TICKETS);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <Title>ElectroBlast Rave</Title>
          <Ticket>
            <h3>ElectroBlast Rave</h3>
            <p>22/09/2024 - 00:00</p>
            <p>Allianz Parque - São Paulo</p>
            <Badge color="#29E731">Adquirido</Badge>
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
            <SellModal onClose={() => setDisplaySellModal(false)} />
          )}

          {displaySwapModal && (
            <SwapModal onClose={() => setDisplaySwapModal(false)} />
          )}
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
