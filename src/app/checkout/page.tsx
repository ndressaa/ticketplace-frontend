import { BottomNavBar, Header } from '@/components';
import { Content } from './styles';

export default function Page() {
  return (
    <>
      <Header isLoginOrSignup={false} currentPage="cart/checkout" />

      <Content>Checkout</Content>

      <BottomNavBar />
    </>
  );
}
