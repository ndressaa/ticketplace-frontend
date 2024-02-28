// nessa página fazer a request p o back para
// carregar a lista de eventos

import { BottomNavBar, Header } from '@/components';
import Link from 'next/link';
import { Content } from './styles';

export default function Page() {
  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        Página de eventos
        <br />
        <br />
        <Link href="./events/1234">Link exemplo evento 1234</Link>
        <br />
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
