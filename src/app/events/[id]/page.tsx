import { BottomNavBar, Header } from '@/components';
import { Content } from '../styles';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <div>Evento exemplo {params.id}</div>
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
