import { BottomNavBar, EventSlider, Header, Search } from '@/components';
import { Container, Content } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header isLoginOrSignup={false} />

      <Content>
        <Search />
        <br />
        <section>Categorias</section>
        <br />
        <EventSlider title="Eventos Populares" />
        <br />
        <EventSlider title="Promoções" />
        <br />
      </Content>

      <BottomNavBar />
    </Container>
  );
};
