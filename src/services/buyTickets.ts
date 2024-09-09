export async function buyTickets(userId: number, tickets: any, token: string) {
  const data = tickets.map((ticket: any) => ({
    id_usuario: userId,
    id_ingresso: ticket,
  }));

  const url = '/api/buyTickets';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
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
