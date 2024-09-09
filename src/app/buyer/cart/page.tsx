'use client';

import { BottomNavBar, CartTicket, Header } from '@/components';
import { Screen } from '@/interfaces';
import { getCartByUserId, getEventById, getTicketById } from '@/services';
import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Loading from '../../loading';
import { Button, Container, Content, TicketsDiv, TotalValue } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [userCart, setUserCart] = useState<any>(null);
  const [cartTickets, setCartTickets] = useState<any>(null);
  const [events, setEvents] = useState<any>(null);
  const [total, setTotal] = useState(null);

  const router = useRouter();
  const { isLoggedIn, userId, authToken, setCurrentPage, setCart } = useStore();

  if (!loading && !isLoggedIn) {
    return (
      <>
        <Header />
        <p style={{ paddingTop: '65px' }}>
          Faça login para adicionar ingressos ao carrinho
        </p>
      </>
    );
  }

  const fetchEvents = useCallback(async (data: any) => {
    await Promise.all(
      data.map(
        async (ticket: any) =>
          await getEventById(ticket[0].id_evento, authToken)
      )
    ).then((result) => setEvents(result));
  }, []);

  const fetchTickets = useCallback(async (data: any) => {
    await Promise.all(
      data.map(
        async (ticket: any) =>
          await getTicketById(ticket.id_ingresso, authToken)
      )
    ).then((result) => {
      setCartTickets(result);
      setTotal(result.flat().reduce((sum, item) => sum + item.valor, 0));
      fetchEvents(result);
    });
  }, []);

  useEffect(() => {
    if (userId && authToken) {
      getCartByUserId(userId, authToken).then((data) => {
        setUserCart(data);
        fetchTickets(data);
      });
    }
  }, [userId, authToken]);

  useEffect(() => {
    userCart && cartTickets && events && setLoading(false);
    setCurrentPage(Screen.CART);
  }, [userCart, cartTickets, total, events]);

  const handleClick = () => {
    setCart(cartTickets.map((ticket: any) => ticket[0].id_evento));
    router.push(`/buyer/checkout?total=${total}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <TicketsDiv>
            {cartTickets?.length ? (
              cartTickets?.map((ticket: any, i: number) => (
                <CartTicket
                  ticket={ticket}
                  event={events[i]}
                  key={`ticket-${i}`}
                />
              ))
            ) : (
              <p>Seu carrinho está vazio</p>
            )}
          </TicketsDiv>

          {Boolean(cartTickets?.length) && (
            <>
              <TotalValue>
                <p>Total:</p>
                <p>R$ {total}</p>
              </TotalValue>

              <Button onClick={handleClick}>Checkout</Button>
            </>
          )}
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
