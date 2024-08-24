export async function addToCart(
  userId: number,
  ticketId: any,
  ticketType: string,
  token: string
) {
  console.log(userId, ticketId, ticketType, token);

  const url = '/api/addToCart';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        id_usuario: userId,
        id_ingresso: ticketId,
        classe: ticketType,
        desconto: 0,
      },
      token: token,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
