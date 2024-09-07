'use client';

import { Event } from '@/components';
import Link from 'next/link';
import { Container, Events, Title } from './EventSlider.styles';

export const EventSlider = (props: {
  title: string;
  events: any; // TODO tipar
  filter?: string;
}) => {
  const { title, events } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Events>
        {events
          .sort(() => Math.random() - 0.5)
          .map((event: any) => {
            const link = `/events/${event.id}`;
            return (
              <Link href={link} key={`link-to-event-${event.id}`}>
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
