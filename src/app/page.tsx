import { BottomNavBar, EventSlider, Header, Search } from '@/components';

export default function Page() {
  return (
    <main>
      <Header isLoginOrSignup={false} />
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
