import { getAllEvents } from '@/api';
import { BottomNavBar, EventSlider, Header, Search } from '@/components';
import { Container, Content } from './styles';

export default async function Page() {
  const events = await getAllEvents();

  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <Container>
          <Search />

          <EventSlider title="Gênero" />

          <EventSlider title="Artista" />

          <EventSlider title="TOP 10 Shows" />

          {/* <Link href="./events/1234">Link exemplo evento 1234</Link> */}
        </Container>
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
