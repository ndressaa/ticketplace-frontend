'use client';

import { BottomNavBar, CartTicket, Header } from '@/components';
import { useAppContext } from '@/context';
import Link from 'next/link';
import { Button, Container, Content, TicketsDiv, TotalValue } from './styles';

export default async function Page() {
  const { globalState } = useAppContext();

  const isLoggedIn = !!globalState.user_id;

  if (!isLoggedIn) {
    return (
      <>
        <Header isLoginOrSignup={false} />
        <p style={{ paddingTop: '65px' }}>
          Faça login para adicionar ingressos ao carrinho
        </p>
      </>
    );
  }

  const url = '/api/getCartByUserId';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: globalState.user_id,
      token: globalState.auth_token,
    }),
  };

  const response = await fetch(url, options);
  const cartTickets = await response.json();

  const cartTicketsValue = await Promise.all(
    cartTickets.map(async (cartTicket: any): Promise<any> => {
      const url = '/api/getTicketById';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: cartTicket.id_ingresso,
          token: globalState.auth_token,
        }),
      };

      const response = await fetch(url, options);
      const ticket = await response.json();

      const { valor } = ticket[0];
      return valor;
    })
  );

  const total = cartTicketsValue.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <>
      <Header isLoginOrSignup={false} currentPage="cart/checkout" />

      <Content>
        <Container>
          <TicketsDiv>
            {cartTickets.map((ticket: any) => (
              <CartTicket cartTicket={ticket} />
            ))}
          </TicketsDiv>

          <TotalValue>
            <p>Total:</p>
            <p>R$ {total}</p>
          </TotalValue>

          <Link href={{ pathname: '/checkout', query: { total: `${total}` } }}>
            <Button>Checkout</Button>
          </Link>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
