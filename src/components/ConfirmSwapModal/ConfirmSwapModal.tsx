'use client';

import Loading from '@/app/loading';
import { WarningIcon } from '@/assets/icons';
import useStore from '@/store';
import { useEffect, useState } from 'react';
import { Container, InnerDiv } from './ConfirmSwapModal.styles';

interface ConfirmSwapModalProps {
  onClose: () => void;
}

export const ConfirmSwapModal = (params: ConfirmSwapModalProps) => {
  const { onClose } = params;

  const [loading, setLoading] = useState(true);
  const { swapTickets } = useStore();
  const { current, offered } = swapTickets;

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <InnerDiv>
        <WarningIcon color="#260259" />
        <p>
          Confirma a troca do ingresso para o evento {current} por um ingresso
          para o evento {offered}?
        </p>
        <button>Sim</button>
        <button onClick={onClose}>Não</button>
      </InnerDiv>
    </Container>
  );
};
