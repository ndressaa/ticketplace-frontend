'use client';

import { Container, InnerDiv } from './OfferModal.styles';

interface OfferModalProps {
  onClose: () => void;
}

export const OfferModal = (params: OfferModalProps) => {
  const { onClose } = params;

  return (
    <Container>
      <InnerDiv>
        <p>
          Qual ingresso gostaria de ofertar em troca de um ingresso para o
          evento FantasyCon?
        </p>
        <select name="tickets" id="tickets">
          <option value="" disabled selected>
            Selecione
          </option>
          <option>ElectroBlast Rave</option>
          <option>Comedy Carnival</option>
        </select>
        <button>Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </InnerDiv>
    </Container>
  );
};
