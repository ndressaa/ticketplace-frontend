'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header, Ticket } from '@/components';
import { Screen } from '@/interfaces';
import { eventsMock } from '@/mocks';
import useStore from '@/store';
import { useEffect, useState } from 'react';
import { Container, Content, Title } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const { setCurrentPage } = useStore();

  const event = eventsMock[1];

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
          <Title>Ingressos</Title>

          <Ticket
            eventName={event.titulo}
            eventDate={event.data}
            image={event.capa}
            action="Comprar"
          />

          <Ticket
            eventName={event.titulo}
            eventDate={event.data}
            image={event.capa}
            action="Trocar"
          />
          <br />
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
