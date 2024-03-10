interface IAddToCart {
  id_usuario: any;
  id_ingresso: any;
  classe: any;
  desconto: any;
}

export async function getCartByUserId(id: string, token: string) {
  const res = await fetch(
    `http://localhost:8080/v1/carrinho/?id_usuario-eq=${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  return data;
}

export async function addToCart(
  { id_usuario, id_ingresso, classe, desconto }: IAddToCart,
  token: string
) {
  const res = await fetch(`http://localhost:8080/v1/carrinho`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify([
      {
        id_usuario,
        id_ingresso,
        classe,
        desconto,
      },
    ]),
  });

  const data = await res.json();
  return data;
}
