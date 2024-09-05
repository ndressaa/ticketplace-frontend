'use client';

import { WarningIcon } from '@/assets/icons';
import { Container, InnerDiv } from './SwapModal.styles';

interface SwapModalProps {
  onClose: () => void;
}

export const SwapModal = (params: SwapModalProps) => {
  const { onClose } = params;

  return (
    <Container>
      <InnerDiv>
        <WarningIcon color="#260259" />
        <p>
          Você tem certeza de que deseja disponibilizar o ingresso para o evento
          ElectroBlast Rave para troca?
        </p>
        <button>Sim</button>
        <button onClick={onClose}>Não</button>
      </InnerDiv>
    </Container>
  );
};
