'use client';

import { getCartByUserId, getTicketById } from '@/api';
import { BottomNavBar, CartTicket, Header } from '@/components';
import { useAppContext } from '@/context';
import Link from 'next/link';
import { Button, Container, Content, TicketsDiv, TotalValue } from './styles';

export default async function Page() {
  const { globalState } = useAppContext();

  const cartTickets = await getCartByUserId(
    globalState.user_id,
    globalState.auth_token
  );

  const cartTicketsValue = await Promise.all(
    cartTickets.map(async (cartTicket: any): Promise<any> => {
      const ticket = await getTicketById(
        cartTicket.id_ingresso,
        globalState.auth_token
      );
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
