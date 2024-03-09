'use-client';

import { getAllEvents } from '@/api';
import { Event } from '@/components';
import Link from 'next/link';
import { Container, Events, Title } from './EventSlider.styles';

export const EventSlider = async (props: {
  title: string;
  filter?: string;
}) => {
  const { title, filter } = props;
  const events = filter ? null : await getAllEvents();

  return (
    <Container>
      <Title>{title}</Title>
      <Events>
        {events
          .sort(() => Math.random() - 0.5)
          .map((event: any) => {
            const link = `./events/${event.id}`;
            return (
              <Link href={link}>
                <Event
                  imagem={event.capa}
                  titulo={event.titulo}
                  data={event.data}
                />
              </Link>
            );
          })}
      </Events>
    </Container>
  );
};
