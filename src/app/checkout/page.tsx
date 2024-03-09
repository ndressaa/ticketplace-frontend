import { BottomNavBar, Header } from '@/components';
import { Content } from './styles';

export default function Page() {
  return (
    <>
      <Header isLoginOrSignup={false} currentPage="cart/checkout" />

      <Content>
        <head>
          <title>Checkout</title> 
        </head>  

        <body>
          <h2>Total</h2>  

          <button type="button">PayPal</button>
          <button type="button">Cartão de Crédito</button>
          <button type="button">Pix</button>

          <h2>Dados do Cartão</h2>
          <p>Nome do Titular do Cartão</p>
          <p>Número do Cartão</p>
          <p>Validade</p>
          <p>CVC</p>

          <button type="button">Finalizar Compra</button>
        </body>   
      </Content>
      
      <BottomNavBar />
    </>
  );
}
