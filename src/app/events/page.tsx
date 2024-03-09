import { BottomNavBar, EventSlider, Header, Search } from '@/components';
import { Container, Content } from './styles';

export default async function Page() {
  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <Container>
          <Search />

          <EventSlider title="Gênero" />

          <EventSlider title="Artista" />

          <EventSlider title="TOP 10 Shows" />
        </Container>
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
