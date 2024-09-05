'use client';

import { WarningIcon } from '@/assets/icons';
import { Container, InnerDiv } from './SellModal.styles';

interface SellModalProps {
  onClose: () => void;
}

export const SellModal = (params: SellModalProps) => {
  const { onClose } = params;

  return (
    <Container>
      <InnerDiv>
        <WarningIcon color="#260259" />
        <p>
          Você tem certeza de que deseja disponibilizar o ingresso para o evento
          ElectroBlast Rave para venda?
        </p>
        <p>O valor de venda será R$ 70,00</p>
        <button>Sim</button>
        <button onClick={onClose}>Não</button>
      </InnerDiv>
    </Container>
  );
};
