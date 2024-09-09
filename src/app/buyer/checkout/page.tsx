'use client';

import { BottomNavBar, Header } from '@/components';
import { Screen } from '@/interfaces';
import { buyTickets } from '@/services';
import useStore from '@/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../loading';
import {
  Button,
  Container,
  Content,
  PaymentForm,
  PaymentMethods,
  Total,
} from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const searchParams = useSearchParams();
  const total = searchParams?.get('total');

  const { userId, authToken, setCurrentPage, cart, setCart, setMyTickets } =
    useStore();

  const onClickHandler = useCallback(async (event: any) => {
    event.preventDefault();

    const tickets = cart.map((ticket: any) => ticket.id_ingresso);

    const checkout = await buyTickets(userId, tickets, authToken);

    setMyTickets(cart.map((ticket: any) => ({ id: ticket, status: 'owned' })));
    setCart(null);

    if (checkout) {
      toast('Pagamento realizado com sucesso!', {
        duration: 4000,
        position: 'top-center',
        style: { backgroundColor: 'var(--color-light)' },
        icon: '✅',
      });
      router.push('/');
    }
  }, []);

  useEffect(() => {
    setLoading(false);
    setCurrentPage(Screen.CHECKOUT);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <Total>
            <p>Total</p>
            <span>R$ {total},00</span>
          </Total>

          <PaymentMethods>
            <button type="button">PayPal</button>
            <button type="button">Cartão de Crédito</button>
            <button type="button">Pix</button>
          </PaymentMethods>

          <PaymentForm>
            <h2>Dados do Cartão</h2>

            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome do titular do cartão"
            />
            <input
              type="number"
              name="numero"
              id="numero"
              placeholder="Número do cartão"
            />
            <div>
              <div>
                <label htmlFor="validade"> Validade</label>
                <input type="text" name="validade" id="validade" />
              </div>
              <div>
                <label htmlFor="cvc">CVC</label>
                <input type="number" name="cvc" id="cvc" />
              </div>
            </div>

            <Button onClick={onClickHandler}>Finalizar Compra</Button>
          </PaymentForm>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
