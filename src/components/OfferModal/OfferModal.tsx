'use client';

import useStore from '@/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Container, InnerDiv } from './OfferModal.styles';

interface OfferModalProps {
  eventName?: string;
  onClose: () => void;
}

export const OfferModal = (params: OfferModalProps) => {
  const { eventName, onClose } = params;
  const { myTickets, setMyTickets } = useStore();
  const router = useRouter();

  const [selected, setSelected] = useState<any>(null);

  const updateTicketStatus = (id: string, status: string) => {
    const updatedTickets = myTickets.map((ticket: any) =>
      ticket.id == id ? { ...ticket, status } : ticket
    );

    setMyTickets(updatedTickets);
  };

  const handleSelect = (eventId: any) => {
    setSelected(eventId);
  };

  const handleConfirm = () => {
    updateTicketStatus(selected, 'offered');
    router.push('/buyer/tickets');
  };

  return (
    <Container>
      <InnerDiv>
        <p>
          Qual ingresso gostaria de ofertar em troca de um ingresso para o
          evento {eventName}?
        </p>
        <select
          name="tickets"
          id="tickets"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="1">ElectroBlast Rave</option>
          <option value="3">Comedy Carnival</option>
        </select>
        <button onClick={handleConfirm}>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </InnerDiv>
    </Container>
  );
};
