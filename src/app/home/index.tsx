import {
  BottomNavBar,
  Categories,
  EventSlider,
  Header,
  Search,
} from '@/components';
import { Container, Content } from './styles';

export const Home = () => {
  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <Container>
          <Search />

          <Categories />

          <EventSlider title="Eventos Populares" />

          <EventSlider title="Promoções" />
        </Container>
      </Content>

      <BottomNavBar currentPage="home" />
    </>
  );
};
