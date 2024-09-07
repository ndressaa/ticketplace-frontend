'use client';

import Loading from '@/app/loading';
import { QRCode } from '@/assets/img';
import { BottomNavBar, Header } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
import { formatCpf } from '@/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Container, Content, Name, Ticket, Title } from './styles';

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
          <Title>ElectroBlast Rave</Title>

          <Image src={QRCode} alt="QR code" />

          <Name>Laura Smith - {formatCpf('98700000000')}</Name>

          <Ticket>
            <h3>ElectroBlast Rave</h3>
            <p>22/09/2024 - 00:00</p>
            <p>Allianz Parque - São Paulo</p>
          </Ticket>

          <Button>Detalhes</Button>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
