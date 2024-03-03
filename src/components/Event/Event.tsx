import { EventPlaceholder } from '@/assets/img';
import Image from 'next/image';
import { Container, Info } from './Event.styles';

export const Event = () => {
  return (
    <Container>
      <Image src={EventPlaceholder} alt="Show" width={205} height={100} />
      <Info>
        <h4> Show da banda X</h4>
        <p> São Paulo - 04/03/2024 - 21h</p>
      </Info>
    </Container>
  );
};
