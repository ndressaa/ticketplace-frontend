import { getEventById } from '@/api';
import { BottomNavBar, Header } from '@/components';
import { formatDate } from '@/utils';
import { Button, Container, Content, Description, Info, Title } from './styles';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const event = await getEventById(id);

  const { titulo, capa, data, descricao } = event[0];

  const imageSource = `data:image/jpeg;base64, ${capa}`;
  const date = formatDate(data).split(' - ')[0];
  const time = formatDate(data).split(' - ')[1];

  return (
    <>
      <Header isLoginOrSignup={false} />

      <Content>
        <Container>
          <Title>{titulo}</Title>

          <img src={imageSource} alt="Show" width={340} height={165} />

          <Info>
            <p>
              <b>Data</b>
              {date}
            </p>

            <p>
              <b>Horário</b>
              {time}
            </p>

            <p>
              <b>Local</b>
              São Paulo
            </p>

            <p>
              <b>Endereço</b>
              Rua das Rosas, 123 - Vila Florido, São Paulo - SP
            </p>

            <p>
              <b>Valor</b>
              [valor]
            </p>
          </Info>

          <Description>{descricao}</Description>

          <Button>Adicionar ao carrinho</Button>
        </Container>
      </Content>

      <BottomNavBar currentPage="events" />
    </>
  );
}
