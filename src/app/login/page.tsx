import { Header } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <Header isLoginOrSignup />
      <div>formulario de login</div>
      <br />
      <Link href="./signup">Cadastre-se</Link>
    </main>
  );
}
