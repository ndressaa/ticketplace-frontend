export async function getTicketById(ticketId: any, token: string) {
  const urlTicket = '/api/getTicketById';
  const optionsTicket = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: ticketId,
      token,
    }),
  };
  try {
    const responseTicket = await fetch(urlTicket, optionsTicket);
    const json = await responseTicket.json();
    return json;
  } catch (error) {
    return error;
  }
}
