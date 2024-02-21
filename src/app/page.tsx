import { Header } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <br />
      <br />
      Página inicial
      <br />
      <br />
      <Link href="./login">login</Link>
      <br />
      <br />
      <Link href="./events">página de eventos</Link>
    </main>
  );
}
