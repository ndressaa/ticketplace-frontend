import { getEventById, getTicketById } from '@/api';
import { ticketType } from '@/utils';
import { RemoveTicket, Ticket, TicketPrice, Title } from './CartTicket.styles';

export const CartTicket = async (props: { cartTicket: any }) => {
  const { cartTicket } = props;

  const { id_ingresso } = cartTicket;

  const ticket = await getTicketById(id_ingresso);
  const { valor, tipo, id_evento } = ticket[0];

  const event = await getEventById(id_evento);
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
