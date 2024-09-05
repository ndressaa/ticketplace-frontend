'use client';

import Loading from '@/app/loading';
import { CogIcon, UserIcon } from '@/assets/icons';
import { BottomNavBar, Header } from '@/components';
import { Screen } from '@/interfaces';
import useStore from '@/store';
import { formatCpf } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Avatar, ButtonDiv, Container, Content, UserInfo } from './styles';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const { userName, userDocument, userEmail, setCurrentPage, reset } =
    useStore();
  const router = useRouter();

  const logoff = useCallback(async () => {
    await reset();
    router.push('/');
  }, []);

  useEffect(() => {
    setLoading(false);
    setCurrentPage(Screen.PROFILE);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <Content>
        <Container>
          <UserInfo>
            <div>
              <Avatar>
                <UserIcon size="55" color="#4703A6" />
              </Avatar>
              <div>
                <h1>{userName}</h1>
                <p>{userEmail}</p>
                <p>{formatCpf(userDocument)}</p>
              </div>
            </div>
            <button>
              <CogIcon size="25" color="#260259" />
              Configurações
            </button>
          </UserInfo>
          <ButtonDiv>
            <Link href="/buyer/tickets">
              <button>Meus Ingressos</button>
            </Link>
            <button onClick={logoff}>Sair</button>
          </ButtonDiv>
        </Container>
      </Content>

      <BottomNavBar />
    </>
  );
}
