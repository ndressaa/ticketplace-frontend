'use-client';

import { getAllEvents } from '@/api';
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

  const isLoggedIn = !!globalState.userId;

  const { title } = props;

  const events = isLoggedIn
    ? await getAllEvents(globalState.auth_token)
    : eventsMock;

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
