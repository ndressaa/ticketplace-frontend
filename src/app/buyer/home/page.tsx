'use client';

import Loading from '@/app/loading';
import { MarketIcon } from '@/assets/icons';
import {
  BottomNavBar,
  Categories,
  EventSlider,
  Header,
  Search,
} from '@/components';
import { Screen } from '@/interfaces';
import { eventsMock } from '@/mocks';
import { getAllEvents } from '@/services';
import useStore from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Container, Content } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any>(null);
  const { authToken, setCurrentPage } = useStore();

  useEffect(() => {
    if (authToken) {
      getAllEvents(authToken).then((data) => {
        if (Object.keys(data).includes('error')) {
          setEvents(eventsMock);
        } else {
          setEvents(data);
        }
      });
    } else {
      setEvents(eventsMock);
    }
  }, [authToken]);

  useEffect(() => {
    events && setLoading(false);
    setCurrentPage(Screen.HOME);
  }, [events]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <Search />

          <Categories />

          <EventSlider title="Eventos Populares" events={events} />

          <EventSlider title="Promoções" events={events} />

          <Link href="/buyer/marketplace">
            <Button>
              <MarketIcon size="40" color="#260259" />
              Marketplace
            </Button>
          </Link>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
