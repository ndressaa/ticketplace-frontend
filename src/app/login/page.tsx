import { Header } from '@/components';
import Link from 'next/link';
import { Content } from './styles';

export default function Page() {
  return (
    <>
      <Header isLoginOrSignup />

      <Content>
        <div>formulario de login</div>
        <br />
        <Link href="./signup">Cadastre-se</Link>
      </Content>
    </>
  );
}
