'use client';

import { formatDate } from '@/utils';
import { Container, Info } from './Event.styles';

export const Event = (props: {
  imagem?: string;
  titulo?: string;
  data?: string;
}) => {
  const { imagem, titulo, data } = props;
  const imageSource = `data:image/jpeg;base64, ${imagem}`;

  return (
    <Container>
      <img src={imageSource} alt="Show" width={205} height={100} />
      <Info>
        <h4>{titulo}</h4>
        <p>São Paulo - {formatDate(data)}</p>
      </Info>
    </Container>
  );
};
