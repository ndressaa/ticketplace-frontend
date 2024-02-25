// nessa página fazer a request p o back para
// carregar a lista de eventos

import { BottomNavBar } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      Página de eventos
      <br />
      <br />
      <Link href="./events/1234">Link exemplo evento 1234</Link>
      <br />
      <BottomNavBar />
    </main>
  );
}
