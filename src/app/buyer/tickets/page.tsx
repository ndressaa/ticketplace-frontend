'use client';

import Loading from '@/app/loading';
import { BottomNavBar, Header } from '@/components';
import { Screen } from '@/interfaces';
import { getEventById } from '@/services';
import useStore from '@/store';
import { badgeColor, badgeText, formatDate } from '@/utils';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Badge, Container, Content, Ticket, Tickets, Title } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<any>(null);
  const { userId, authToken, setCurrentPage, myTickets } = useStore();

  const fetchEvents = useCallback(async (data: any) => {
    await Promise.all(
      data.map(async (ticket: any) => {
        const userTicket = await getEventById(ticket.id, authToken);
        return { ...userTicket, status: ticket.status };
      })
    ).then((result) => setTickets(result));
  }, []);

  useEffect(() => {
    if (userId && authToken) {
      fetchEvents(myTickets);
    }
  }, [userId, authToken]);

  useEffect(() => {
    tickets && setLoading(false);
    setCurrentPage(Screen.TICKETS);
  }, [tickets]);

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
            {tickets?.length ? (
              tickets?.map((event: any, i: number) => {
                const { status } = event;
                const { titulo, id, data, endereco } = event[0];
                const address = `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`;

                return (
                  <Link href={`./tickets/${status}/${id}`} key={`ticket-${i}`}>
                    <Ticket>
                      <h3>{titulo}</h3>
                      <p>{formatDate(data)}</p>
                      <p>{address}</p>
                      <Badge color={badgeColor(status)}>
                        {badgeText(status)}
                      </Badge>
                    </Ticket>
                  </Link>
                );
              })
            ) : (
              <p>Você ainda não comprou nenhum ingresso</p>
            )}
          </Tickets>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
