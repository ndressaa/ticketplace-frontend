import { BottomNavBar, Header } from '@/components';
import { Content } from './styles';

export default function Page() {
  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        Checkout <br />
      </Content>

      <BottomNavBar />
    </>
  );
}
