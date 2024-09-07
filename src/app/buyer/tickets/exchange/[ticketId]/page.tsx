'use client';

import Loading from '@/app/loading';
import { BottomNavBar, ConfirmSwapModal, Header } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
import { useEffect, useState } from 'react';
import { Badge, Container, Content, Offer, Ticket, Title } from './styles';

export default function Page({ params }: { params: { ticketId: string } }) {
  const { ticketId } = params;

  const [loading, setLoading] = useState(true);
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);
  const [tickets, setTickets] = useState<any>({
    current: undefined,
    offered: undefined,
  });
  const { setCurrentPage, setSwapTickets } = useStore();

  const handleClick = (offered: any) => {
    setSwapTickets({ current: 'Adventure Quest Expo', offered });
    setDisplayConfirmModal(true);
  };

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
          <Title>Adventure Quest Expo</Title>
          <Ticket>
            <h3>Adventure Quest Expo</h3>
            <p>22/09/2024 - 00:00</p>
            <p>Allianz Parque - São Paulo</p>
            <Badge color="#F0691D">Disponível para troca</Badge>
          </Ticket>

          <Title>Ingressos Ofertados</Title>

          <Offer onClick={() => handleClick('ElectroBlast Rave')}>
            <h3>ElectroBlast Rave</h3>
            <p>22/09/2024 - 00:00</p>
            <p>Allianz Parque - São Paulo</p>
          </Offer>

          <Offer onClick={() => handleClick('Comedy Carnival')}>
            <h3>Comedy Carnival</h3>
            <p>04 / 06 / 2025 - 23:30</p>
            <p>Teatro Municipal - São Paulo</p>
          </Offer>
        </Container>

        {displayConfirmModal && (
          <ConfirmSwapModal onClose={() => setDisplayConfirmModal(false)} />
        )}
      </Content>

      <BottomNavBar />
    </>
  );
}
