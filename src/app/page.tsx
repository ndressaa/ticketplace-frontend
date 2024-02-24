import { EventSlider, Header, Search } from '@/components';
import { BottomNavBar } from '@/components/BottomNavBar/BottomNavBar';

export default function Home() {
  return (
    <main>
      <Header />
      <br />
      <Search />
      <br />
      <section>Categorias</section>
      <br />
      <EventSlider title="Eventos Populares" />
      <br />
      <EventSlider title="Promoções" />
      <br />
      <BottomNavBar />
      {/* <Link href="./login">login</Link> */}
      {/* <Link href="./events">página de eventos</Link> */}
    </main>
  );
}
