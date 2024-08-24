'use client';

import { ticketType } from '@/utils';
import { RemoveTicket, Ticket, TicketPrice, Title } from './CartTicket.styles';

export const CartTicket = (props: { ticket: any; event: any }) => {
  const { ticket, event } = props;

  const { valor, tipo } = ticket[0];

  const { titulo, descricao, capa } = event[0];
  const imageSource = `data:image/jpeg;base64, ${capa}`;
  const type = ticketType(tipo);

  return (
    <Ticket>
      <Title>{titulo}</Title>
      <div>
        <img src={imageSource} width={205} height={100} />
        <div>
          <p>Tipo de ingresso: {type}</p>
          <RemoveTicket>
            <b>X</b> Remover
          </RemoveTicket>
        </div>
      </div>
      <p>{descricao}</p>
      <TicketPrice>
        <b>R$ {valor}</b>
      </TicketPrice>
    </Ticket>
  );
};
