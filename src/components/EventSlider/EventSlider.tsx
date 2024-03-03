import { Event } from '@/components';
import { Container, Events, Title } from './EventSlider.styles';

export const EventSlider = (props: { title: string }) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Events>
        <Event />
        <Event />
        <Event />
      </Events>
    </Container>
  );
};
