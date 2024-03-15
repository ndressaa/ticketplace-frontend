'use client';

import { Event } from '@/components';
import { useAppContext } from '@/context';
import { eventsMock } from '@/mocks';
import Link from 'next/link';
import { Container, Events, Title } from './EventSlider.styles';

export const EventSlider = async (props: {
  title: string;
  filter?: string;
}) => {
  const { globalState } = useAppContext();
  const { title } = props;

  const isLoggedIn = !!globalState.userId;

  const url = '/api/getAllEvents';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: globalState.auth_token,
    }),
  };

  const response = await fetch(url, options);
  const eventsApi = await response.json();

  const events = isLoggedIn ? eventsApi : eventsMock;

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
