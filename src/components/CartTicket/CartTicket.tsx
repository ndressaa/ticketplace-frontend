import { useAppContext } from '@/context';
import { ticketType } from '@/utils';
import { RemoveTicket, Ticket, TicketPrice, Title } from './CartTicket.styles';

export const CartTicket = async (props: { cartTicket: any }) => {
  const { globalState } = useAppContext();
  const { cartTicket } = props;
  const { id_ingresso } = cartTicket;

  const urlTicket = '/api/getTicketById';
  const optionsTicket = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id_ingresso,
      token: globalState.auth_token,
    }),
  };

  const responseTicket = await fetch(urlTicket, optionsTicket);
  const ticket = await responseTicket.json();

  const { valor, tipo, id_evento } = ticket[0];

  const url = '/api/getEventById';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id_evento,
      token: globalState.auth_token,
    }),
  };

  const response = await fetch(url, options);
  const event = await response.json();

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
