'use client';

import { formatDate } from '@/utils';
import Link from 'next/link';
import { Buttons, Container, Info, Price, Title } from './Ticket.styles';

interface TicketProps {
  eventName: string;
  eventDate: string;
  image: string;
  action: any;
}

export const Ticket = (params: TicketProps) => {
  const { eventName, eventDate, image, action } = params;

  const imageSource = `data:image/jpeg;base64, ${image}`;

  const ticketQuery = {
    action: action === 'Comprar' ? 'buy' : 'swap',
    discount: action === 'Comprar' ? 65 : null,
  };

  return (
    <Container>
      <div>
        <Title>{eventName}</Title>
        <Info>
          São Paulo <br /> {formatDate(eventDate).slice(0, 10)}
        </Info>
      </div>
      <div>
        <img src={imageSource} alt="Show" width={205} height={100} />
        <Price>
          <p>R$ 70,00</p>
          <p>R$ 65,00</p>
        </Price>
      </div>
      <Buttons>
        <button>Detalhes</button>
        <Link
          href={{
            pathname: '/events/2',
            query: ticketQuery,
          }}
        >
          <button>{action}</button>
        </Link>
      </Buttons>
    </Container>
  );
};
