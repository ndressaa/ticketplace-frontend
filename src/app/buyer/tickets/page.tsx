'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Badge, Container, Content, Ticket, Tickets, Title } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
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
          <Title>Meus Ingressos</Title>

          <Tickets>
            <Link href="">
              <Ticket>
                <h3>ElectroBlast Rave</h3>
                <p>22/09/2024 - 00:00</p>
                <p>Allianz Parque - São Paulo</p>
                <Badge color="#29E731">Adquirido</Badge>
              </Ticket>
            </Link>
          </Tickets>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
