'use client';

import { WarningIcon } from '@/assets/icons';
import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { Container, InnerDiv } from './SwapModal.styles';

interface SwapModalProps {
  id: any;
  eventName: string;
  onClose: () => void;
}

export const SwapModal = (params: SwapModalProps) => {
  const { id, eventName, onClose } = params;

  const { myTickets, setMyTickets } = useStore();
  const router = useRouter();

  const updateTicketStatus = (id: string, status: string) => {
    const updatedTickets = myTickets.map((ticket: any) =>
      ticket.id == id ? { ...ticket, status } : ticket
    );

    setMyTickets(updatedTickets);
  };

  const handleSwap = () => {
    updateTicketStatus(id, 'exchange');
    router.push('/buyer/tickets');
  };

  return (
    <Container>
      <InnerDiv>
        <WarningIcon color="#260259" />
        <p>
          Você tem certeza de que deseja disponibilizar o ingresso para o evento{' '}
          {eventName} para troca?
        </p>
        <button onClick={handleSwap}>Sim</button>
        <button onClick={onClose}>Não</button>
      </InnerDiv>
    </Container>
  );
};
