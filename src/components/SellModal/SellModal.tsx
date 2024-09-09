'use client';

import { WarningIcon } from '@/assets/icons';
import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { Container, InnerDiv } from './SellModal.styles';

interface SellModalProps {
  id: any;
  eventName: string;
  onClose: () => void;
}

export const SellModal = (params: SellModalProps) => {
  const { id, eventName, onClose } = params;

  const { myTickets, setMyTickets } = useStore();
  const router = useRouter();

  const updateTicketStatus = (id: string, status: string) => {
    const updatedTickets = myTickets.map((ticket: any) =>
      ticket.id == id ? { ...ticket, status } : ticket
    );

    setMyTickets(updatedTickets);
  };

  const handleSell = () => {
    updateTicketStatus(id, 'onsale');
    router.push('/buyer/tickets');
  };

  return (
    <Container>
      <InnerDiv>
        <WarningIcon color="#260259" />
        <p>
          Você tem certeza de que deseja disponibilizar o ingresso para o evento{' '}
          {eventName} para venda?
        </p>
        <p>O valor de venda será R$ 70,00</p>
        <button onClick={handleSell}>Sim</button>
        <button onClick={onClose}>Não</button>
      </InnerDiv>
    </Container>
  );
};
